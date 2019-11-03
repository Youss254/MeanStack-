import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import {SessionHttpService} from '../session-http.service';
import {Session} from '../session';
import { SessionItemListComponent } from '../session-item-list/session-item-list.component';
import { ParticipantsComponent } from '../participants/participants.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sessionItems$: Session[] = [];
  formateurs: String[] = [];

  nbSessions: number = 0;
  nbFormateurs: number = 0;
  nbParticipants: number = 0;

  nbSessionsMean: number = 0;
  nbSessionsAngular: number = 0;
  nbSessionsNode: number = 0;
  nbSessionsSymphony: number = 0;
  nbSessionsLaravel: number = 0;
  nbSessionsAndroid: number = 0;
  nbSessionsIonic: number = 0;
  nbSessionsXam: number = 0;
  nbSessionsSwift: number = 0;

  constructor(private  sessionhttp: SessionHttpService) { }

  ngOnInit() {
    this.sessionhttp.getSessionsObservable().subscribe( data => {
      this.sessionItems$ = data;
      this.nbSessions+=this.sessionItems$.length;
      for(let session of this.sessionItems$){

        this.nbParticipants+=session.participants;

        if(!this.formateurs.includes(session.formateur))
          this.formateurs.push(session.formateur)

        this.nbFormateurs = this.formateurs.length;

        if(session.track.toLowerCase() == 'mean stack')
          this.nbSessionsMean ++;
        if(session.track.toLowerCase() == 'angular')
          this.nbSessionsAngular ++;
        if(session.track.toLowerCase() == 'nodejs')
          this.nbSessionsNode ++;
        if(session.track.toLowerCase() == 'symphony')
          this.nbSessionsSymphony ++;
        if(session.track.toLowerCase() == 'laravel')
          this.nbSessionsLaravel ++;
        if(session.track.toLowerCase() == 'android')
          this.nbSessionsAndroid ++;
        if(session.track.toLowerCase() == 'ionic')
          this.nbSessionsIonic ++;
        if(session.track.toLowerCase() == 'xamarin')
          this.nbSessionsXam ++;
        if(session.track.toLowerCase() == 'swift')
          this.nbSessionsSwift ++;
      }
    });
  }

}
