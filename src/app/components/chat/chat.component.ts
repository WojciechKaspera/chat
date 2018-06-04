import { Component, OnInit } from '@angular/core';
import { UserService} from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if(this.userService.checkIfLogged() === true) {
      this.router.navigateByUrl('login');
    }
  }

}
