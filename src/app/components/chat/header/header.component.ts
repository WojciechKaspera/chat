import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../user.service";
import {HistoryServiceService} from "../../../history-service.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService, private historyService: HistoryServiceService) { }
  something;
  chosenUser: object = this.userService.chosenUser;
  showChosen() {
    console.log(this.chosenUser);
  }
  ngOnInit() {
    this.userService.change.subscribe(value => {
  this.chosenUser = value[0];
});
  }
}


