import { Injectable } from "@angular/core";
import { Friend } from "./friend";
import { FRIENDS_DATA } from "./friends-mock-data";
import { Observable, of, from} from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

//TODO - this should be a service
export class FriendsRepo {

  private repo: Array<Friend>;
  constructor( ){
    this.reload();
  }
  get data(): Array<Friend> {
    return this.repo;
  }

  delete(id: number): void {
  }

  reload() {
      this.repo = FRIENDS_DATA;
  }

  search(query: Observable<string>){
    return of([]);
  }

}