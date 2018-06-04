import {Component, OnInit} from '@angular/core';
import {HistoryServiceService} from '../../../history-service.service';
import {UserService} from '../../../user.service';
import {User} from '../../../models/user.interface';
import {AngularFireDatabase} from 'angularfire2/database';
import {Status} from "../../../models/status.interface";

@Component({
  selector: 'app-body',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.scss']
})
export class BodyComponent implements OnInit {
  constructor(private historyService: HistoryServiceService, private userService: UserService, private db: AngularFireDatabase) {
  }

  history: object[] = this.historyService.history;
  users: User[];
  picked = '';
  unread: Status[] = [];

  showHistory(user) {
    this.picked = user.name;
    this.unread.forEach((element) => {
      if (element.name === user.name) {
        element.unread = false;
      }
    });
    this.userService.switchTalkingUsers(user);
    this.db.list(`history'/${this.userService.talkingUsers[0]}-${this.userService.talkingUsers[1]}`).valueChanges().subscribe(update => {
      this.history = update;
    });
    setTimeout(this.updateScroll, 10);
  }

  updateScroll() {
    const element = document.getElementById('chatBox');
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }

  show() {
    this.updateScroll();
  }

  ngOnInit() {
    this.historyService.messageSend.subscribe((senderName) => {
      if ((this.userService.talkingUsers[0] !== senderName) && (this.userService.talkingUsers[1] !== this.userService.chosenUser.name) ) {
        this.unread.forEach((element) => {
          if (element.name === senderName) {
            element.unread = true;
          }
        });
      }
    });
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      this.users.forEach((user) => {
        const tempStatusLine: Status = {
          name: user.name,
          unread: false
        };
        this.unread.push(tempStatusLine);
      });
      this.userService.userData = data;
    });
    this.historyService.change.subscribe(update => {
      this.updateScroll();
    });
  }
}
