import { Component, OnInit,Input } from '@angular/core';
import { Observable} from 'rxjs';
import {ParticipantHttpService} from '../participant-http.service';
import { Participant } from '../participant';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  participantModif: Participant=null;
  participants$: Observable<Participant[]>;
  closeResult: string;
  constructor(private  participanthttp: ParticipantHttpService,private modalService: NgbModal) { }
  open(content,participant) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.participantModif = participant;
  }
  openadd(content) {
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
    }
    else {
      return  `with: ${reason}`;
    }
  }
  ajouter(info){
    const participant = {
      "name": info['nom'],
      "cin": info['cin'],
      "nbsessions": info['nbSessions']
    }
    this.participanthttp.addParticipant(participant).subscribe(res => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
    this.modalService.dismissAll();
    this.ngOnInit();
  }
  onEdit(data) {
    const participant = {
      "name": data['nomprenom'],
      "cin": data['CIN'],
      "nbsessions": data['nbresess']
    }
    this.participantModif.name = participant.name;
    this.participantModif.cin = participant.cin;
    this.participantModif.nbsessions= participant.nbsessions;
    console.log(this.participantModif);
    this.participanthttp.updateParticipant(this.participantModif).subscribe(res => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
    location.replace("localhost:4200/admin/participants");
    
    this.modalService.dismissAll();
  }
  ngOnInit() {
    this.participanthttp.getParticipantsObservable().subscribe( data => {
      this.participants$ = data;
  })
}
onDelete(participant) {
  alert("Supression");
  this.participanthttp.deleteParticipant(participant).subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
      this.ngOnInit();
  }

  actualiser() {
    this.ngOnInit();
  }
  
}
