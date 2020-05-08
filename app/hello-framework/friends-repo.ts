import { Injectable } from "@angular/core";
import { Friend } from "./friend";
import { FRIENDS_DATA } from "./friends-mock-data";
import { Observable, of, from} from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FriendsRepo {

  private repo: Array<Friend>;
  constructor( ){
    this.reload();
  }
  get data(): Array<Friend> {
    return this.repo;
  }

  delete(id: number): void {
    const idx = this.repo.findIndex(f => f.id === id )
    this.repo.splice(idx,  1);     
    console.log("REPO IS " , this.repo);
  }

  reload() {
      this.repo = FRIENDS_DATA;
  }

  search(query: Observable<string>){
    return of([]);
  }

}