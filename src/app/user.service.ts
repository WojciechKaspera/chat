import {Injectable, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './models/user.interface';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class UserService {
  constructor(private router: Router, private db: AngularFireDatabase) {}

  userData;

  talkingUsers: string[] = [];

  switchTalkingUsers(user) {
    this.talkingUsers[0] = user.name;
    this.talkingUsers[1] = this.chosenUser.name;
    return this.talkingUsers.sort();
  }

  chosenUser: User = {
    name: undefined,
    status: undefined
  };
  @Output() change: EventEmitter<object> = new EventEmitter();

  logout() {
    this.db.list('users').update(this.chosenUser.name,{"name": this.chosenUser.name, "status": "inactive"});
    localStorage.setItem('user', '');
    this.chosenUser = {
      name: undefined,
      status: undefined
    };
    this.router.navigateByUrl('login');
  }

  changeUser(userName, password) {
    if (this.validate(userName, password)) {
      this.chosenUser = this.userData.filter((element: User) => element.name === userName)[0];
      this.change.emit(this.chosenUser);
      this.router.navigateByUrl('/chat');
      this.writeUserLS(userName);
      this.db.list('users').update(userName,{"name": userName, "status": "active"});
      return this.chosenUser;
    }
  }

  getUsers() {
    return this.db.list('users').valueChanges();
  }

  writeUserLS(userName) {
    localStorage.setItem('user', userName);
  }

  loadUserLS() {
    this.chosenUser.name = localStorage.getItem('user');
    this.chosenUser.status = 'active';
  }

  validate(userName, password) {
    if (this.userData.map((element: User) => element.name).indexOf(userName) === -1 ? false : true) {
      return this.userData.map((element: User) => element.password).indexOf(password) === -1 ? false : true;
    }
    return false;
  }

  checkIfLogged() {
    if (this.chosenUser.name) {
      return this.chosenUser.name === undefined;
    } else return true;
  }
}
