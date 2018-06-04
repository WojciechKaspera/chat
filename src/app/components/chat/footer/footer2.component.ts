import {Component, Input, OnInit} from '@angular/core';
import { HistoryServiceService} from '../../../history-service.service';
import {UserService} from '../../../user.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})

export class FooterComponent implements OnInit {
  constructor(private historyService: HistoryServiceService, private userService: UserService, private fb: FormBuilder) {}
  chosenUser: object = this.userService.chosenUser;

    form = this.fb.group({
      message: ''
    });

    addMessage(message) {
      this.historyService.add(message, this.chosenUser);
      this.form.reset();
    }
    ngOnInit() {
      this.userService.change.subscribe(value => {
        this.chosenUser = value[0];
      });
}
}
