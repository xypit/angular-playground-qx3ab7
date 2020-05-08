import { Component } from '@angular/core';
import { FriendsRepo } from './hello-framework/friends-repo';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly name: string = 'Angular';
  version: number = 7;

  constructor(private repo: FriendsRepo){
 
  }
  onVersionRelease(): void {
    this.version += 1;
  }
  reload():void {
    this.repo.reload();
  }
}
