import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/chat/header/header.component';
import { BodyComponent } from './components/chat/body/body2.component';
import { FooterComponent} from './components/chat/footer/footer2.component';
import {HistoryServiceService} from './history-service.service';
import { UserService } from './user.service';
import { LogInComponent } from './components/log-in/log-in.component';
import {AppRoutingModule} from './app-routing.module';
import { AppSettingsComponent } from './components/app-settings/app-settings.component';
import { ChatComponent } from './components/chat/chat.component';
import {environment} from '../environments/environment';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LogInComponent,
    AppSettingsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [
    HistoryServiceService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
