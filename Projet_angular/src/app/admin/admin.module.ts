import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { AdminComponent } from './admin/admin.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { FormsModule } from '@angular/forms';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import {FakeSessionItemService} from './fake-session-item.service';
import {SessionHttpService} from './session-http.service';
import {FormateurHttpService} from './formateur-http.service';
import {ParticipantHttpService} from './participant-http.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionsComponent } from './sessions/sessions.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { ParticipantsComponent } from './participants/participants.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const adminRoutes: Routes = [
  { path: '',component: AdminComponent,children: [
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'sessions', component: SessionsComponent,children: [
      { path: 'add', component: SessionAddFormComponent },
      { path: 'edit/:id', component: SessionEditFormComponent },
      { path: 'list', component: SessionItemListComponent},
      { path: '', redirectTo: 'list', pathMatch: 'full' }]
    },
    { path: 'formateurs', component: FormateursComponent},
    { path: 'participants', component: ParticipantsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
  ],

  declarations: [
    SessionItemComponent,
    SessionItemListComponent,
    AdminComponent,
    SessionAddFormComponent,
    SessionEditFormComponent,
    DashboardComponent,
    SessionsComponent,
    FormateursComponent,
    ParticipantsComponent
  ],

  providers: [
    FakeSessionItemService, 
    SessionHttpService, 
    FormateurHttpService,
    ParticipantHttpService
  ],
  
  bootstrap: [AdminComponent]

})
export class AdminModule { }
