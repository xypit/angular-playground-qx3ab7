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
    const idx = this.repo.findIndex(f => f.id === id )
    this.repo.splice(idx,  1);     
    console.log("REPO IS " , this.repo);
  }

  reload(newData: Array<Friend>): void {
    if(newData){
      this.repo = newData;
    }else {
      console.log("Repo reloading");
      this.repo = FRIENDS_DATA.slice();
    }
  }

  search(query: Observable<string>){
  return query.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(q => this.filter(q))
    )
  }

  private filter(q: string):Observable<Friend[]> {
      const data = this.repo.filter(f => f.name === q || f.surname === q || f.gender === q || f.city === q || f.age + "" === q );
      return of(data);
  }
}