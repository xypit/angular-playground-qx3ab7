import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Friend } from "./friend";
import { FriendsRepo } from './friends-repo';

@Component({
  selector: 'app-friend',
  styleUrls: ['./friend-component.scss'],
  templateUrl: './friend-component.html',
})
export class FriendComponent {
  friend: Friend;

  constructor(private repo: FriendsRepo){

  }

  close(id: number){
  }
}
