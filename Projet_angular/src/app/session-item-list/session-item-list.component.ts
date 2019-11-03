import { Component, OnInit } from '@angular/core';
import {SessionHttpService} from '../admin/session-http.service';
import { Observable} from 'rxjs';
import {Session} from '../admin/session';

@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
  sessionItems$: Observable<Session[]>;
  constructor(private sessionItemService: SessionHttpService) { }
  ngOnInit() {
    this.sessionItems$ = this.sessionItemService.getSessionsObservable();
  }
  

}
