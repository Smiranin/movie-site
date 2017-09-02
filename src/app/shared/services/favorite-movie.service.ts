import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { Subject } from "rxjs/Subject";

@Injectable()
export class MovieFavoriteService {

  public get removedStream$(): Observable<string> {
    return this._removed$$.asObservable();
  }

  private _favorites: { [key: string]: boolean };

  private get _storage(): { [key: string]: boolean } {
    return window.localStorage.favorites
      ? JSON.parse(window.localStorage.favorites)
      : {};
  }

  private set _storage(value: { [key: string]: boolean }) {
    window.localStorage.favorites = JSON.stringify(value);
  }

  private _removed$$: Subject<string> = new Subject();


  public constructor() {
    this._favorites = this._storage;
  }

  public add(id: string): void {
    this._favorites[id] = true;
    this.saveState();
  }

  public remove(id: string): void {
    delete this._favorites[id];
    this._removed$$.next(id);
    this.saveState();
  }

  public getStatus(id: string): boolean {
    return this._favorites[id];
  }

  public get(): Observable<any> {
    return Observable.of({...this._favorites});
  }

  private saveState(): void {
    this._storage = this._favorites;
  }

}
