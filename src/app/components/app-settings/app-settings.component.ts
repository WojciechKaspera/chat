import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.css']
})
export class AppSettingsComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }
    logOut() {
this.userService.logout();
    }
  ngOnInit() {
  }

}
