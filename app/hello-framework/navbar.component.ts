import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FriendsRepo } from './friends-repo';

@Component({
  selector: 'app-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
})
export class NavBarComponent implements OnInit{
  isSearchMode = false;

  criteria$ = new Subject<string>();

  constructor(private repo: FriendsRepo){

  }

  ngOnInit(){
    this.repo.search(this.criteria$).subscribe(d=> {
      console.log("** Stream data ", d);
      this.repo.reload(d);
    });
  }
}
