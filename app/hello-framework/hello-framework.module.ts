import { NgModule } from '@angular/core';

import { MaterialModule, SharedModule } from '../shared';

import { FriendComponent } from './friend-component';
import { FriendsListComponent } from './friends-list-component';
import { NavBarComponent } from './navbar.component';

@NgModule({
  declarations: [FriendComponent, FriendsListComponent , NavBarComponent],
  exports: [ FriendComponent , FriendsListComponent, NavBarComponent],
  imports: [
    SharedModule,
    MaterialModule,
  ],
})
export class HelloFrameworkModule {}
