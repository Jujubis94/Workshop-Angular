import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  user: User;
  constructor() {
    this.user = new User('https://randomuser.me/api/portraits/lego/2.jpg', 'John',  25, '',)
   }

  ngOnInit() {
  }

  reset() {
    this.user.quote = ''
  }

}
