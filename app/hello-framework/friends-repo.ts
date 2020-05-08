import { Injectable } from "@angular/core";
import { Friend } from "./friend";
import { FRIENDS_DATA } from "./friends-mock-data";
import { Observable, of, from} from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

//TODO1 - use this repo
export class FriendsRepo {

  private repo: Array<Friend>;
  constructor(){
    this.reload(undefined);
  }
  get data(): Array<Friend> {
    return this.repo;
  }

  delete(id: number): void {
  }

  reload(newData: Array<Friend>): void {
  }

  search(query: Observable<string>){
    //TODO
    return of([]);
  }

}