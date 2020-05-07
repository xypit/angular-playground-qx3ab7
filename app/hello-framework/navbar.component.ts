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
  @Output()
  readonly reload: EventEmitter<void> = new EventEmitter();
  @Output()
  readonly new : EventEmitter<void> = new EventEmitter();
  /*@Output()
  readonly search : EventEmitter<void> = new EventEmitter();
 */
  reloadbtn(){
    this.reload.emit();
  }
  newdbtn(){
    this.new.emit();
  }


  searchBtn(){
    this.isSearchMode = !this.isSearchMode;
    //this.search.emit();'
  }

  ngOnInit(){
    this.repo.search(this.criteria$).subscribe(d=> {
      console.log("** Stream data ", d);
      this.repo.reload(d);
    });
  }
}
