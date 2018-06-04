import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {HistoryServiceService} from './history-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService, private db: AngularFireDatabase, private historyService: HistoryServiceService) {}
  title = 'app';
  ngOnInit() {
    const userService = this.userService;
    window.onbeforeunload = function() {
      userService.logout();
    }
    this.userService.getUsers().subscribe((data) => {
      this.userService.userData = data;
    });
    this.userService.loadUserLS();
    this.userService.checkIfLogged();
  }
}
