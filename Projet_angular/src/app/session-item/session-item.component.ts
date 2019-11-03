import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SessionHttpService} from '../admin/session-http.service';
@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
//name = 'Formation Web';
alignement = 'right';
couleur = 'red';
@Input() session: any;
@Output() participantsChange = new EventEmitter<any>();
  constructor(private  sessionhttp: SessionHttpService) { }

  ngOnInit() {
  }
inscrire() {
    console.log('Nouvelle Inscription...');
    this.session.participants = +this.session.participants + 1;
    console.log(this.session.participants + ' Participants');
    this.participantsChange.emit({
    	value: this.session.participants
    });
    if (this.session.participants >= 20) {
     this.session.isCompleted = true;

  }
  console.log(this.session);
  this.sessionhttp.updateSession(this.session).subscribe(res => {
    console.log(res);
  }, (err) => {
    console.log(err);
  });
  
}
}
