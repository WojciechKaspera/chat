import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  form = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
  }

  currentUser: object;

  changeUser(uuk, password) {
    this.userService.changeUser(uuk, password);
  }


  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.router.navigateByUrl('chat');
    }
  }

}
