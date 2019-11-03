import { Component, OnInit } from '@angular/core';
import {Formateur} from '../formateur';
import { Observable} from 'rxjs';
import {FormateurHttpService} from '../formateur-http.service';
import { Router } from "@angular/router";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {

  formateurs$: Observable<Formateur[]>;
  closeResult: string;

  formateurModif : Formateur;
  constructor(private router: Router, private  formateurhttp: FormateurHttpService,private modalService: NgbModal) { }

  ngOnInit() {
    this.formateurs$ = this.formateurhttp.getFormateurObservable();
  }

  onDelete(formateur) {
    //alert("Voulez vous vraiment supprimer ce formateure définitivement");
    this.formateurhttp.deleteFormateur(formateur).subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
      this.ngOnInit();
  }

  ajouter(data) {
    const formateur = {
      "name": data['nom'],
      "lastName": data['prenom'],
      "etat": "disponible",
      "nbSessions": 0
    }
    this.formateurhttp.addFormateur(formateur).subscribe(res => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
    this.modalService.dismissAll();
    this.ngOnInit();
  }

  onEdit(data) {
    const formateur = {
      "name": data['nom'],
      "lastName": data['prenom'],
    }
    this.formateurModif.name = formateur.name;
    this.formateurModif.lastName = formateur.lastName;
    this.formateurhttp.updateFormateur(this.formateurModif).subscribe(res => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
    this.modalService.dismissAll();
    this.ngOnInit();

  }


  open(content, formateur) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.formateurModif = formateur;
  }

  openAjout(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    actualiser() {
      this.ngOnInit();
    }
}
