import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireList} from "angularfire2/database";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {UserService} from "./user.service";

@Injectable()
export class HistoryServiceService {
  constructor(private database: AngularFireDatabase, private userService: UserService) {
    this.database.list(`history'`).valueChanges().subscribe(update => {
      this.change.emit(update);
    });
    database.database.ref(`history'`).on('child_changed', (uuk) => {
      this.senderName = uuk.val()[Object.keys(uuk.val())[Object.keys(uuk.val()).length - 1]].messageObject.sender;
      this.messageSend.emit(this.senderName);
    });
  }

  @Output()
  messageSend: EventEmitter<string> = new EventEmitter();

  senderName;
  @Output() change: EventEmitter<object> = new EventEmitter();
  firebaseHistory: AngularFireList<object> = this.database.list(`history'`);
  history: object[] = [];

  add(message, chosenUser) {
    const time = new Date();
    const messageObject = {
      time: time.toUTCString(),
      sender: chosenUser.name,
      message: message
    };
    this.firebaseHistory = this.database.list(`history'/${this.userService.talkingUsers[0]}-${this.userService.talkingUsers[1]}`);
    this.firebaseHistory.push({messageObject});

  }

  getHistory() {
    return this.history;
  }


}
