import { Injectable, ChangeDetectorRef, ApplicationRef } from "@angular/core";
import { Friend } from "./friend";
import { FRIENDS_DATA } from "./friends-mock-data";
import { Observable, of, from} from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FriendsRepo {

  private repo: Array<Friend>;
  constructor( private cd: ApplicationRef){
    this.reload(undefined);
  }
  get data(): Array<Friend> {
    return this.repo;
  }

  delete(id: number): void {
    //TODO
  }

  reload(newData: Array<Friend>): void {
      this.repo = FRIENDS_DATA.slice();
  }

  search(query: Observable<string>){
    //TODO
    return of([]);
  }
}