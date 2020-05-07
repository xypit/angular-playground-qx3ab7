import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Friend } from "./friend";
import { FriendsRepo } from './friends-repo';

@Component({
  selector: 'app-friends',
  styleUrls: ['./friends-list-component.scss'],
  templateUrl: './friends-list-component.html',
})
export class FriendsListComponent {  
  constructor(private friends: FriendsRepo) {

  }
}
