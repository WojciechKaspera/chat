import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from "@angular/router";
import {LogInComponent} from "./components/log-in/log-in.component";
import {ChatComponent} from "./components/chat/chat.component";
import {AppSettingsComponent} from "./components/app-settings/app-settings.component";

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'settings', component: AppSettingsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
exports: [
  RouterModule
],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
