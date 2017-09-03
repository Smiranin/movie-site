import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { MovieFavoriteService } from "./favorite-movie.service";

import { movies } from "../../data/movies";

@Injectable()
export class MovieService {

  private _favorites$$: BehaviorSubject<IMovie[]> = new BehaviorSubject(null);

  public get favorites$(): Observable<IMovie[]> {
    return this._favorites$$.asObservable();
  }

  public constructor(
    private _movieFavoriteService: MovieFavoriteService,
  ) {
    this._movieFavoriteService.removedStream$
      .subscribe((id: string) => this._updateFavorites(id));
  }

  public getTop(): Observable<IMovie[]> {
    return Observable.of(movies);
  }

  public initFavorites(): void {
    Observable.combineLatest(
      this._movieFavoriteService.get(),
      this.getTop()
    )
      .map(([favoriteIds, movies]: [any, IMovie[]]) => {
        return movies.filter((movie: IMovie) => favoriteIds[movie.idIMDB])
      })
      .subscribe((movies: IMovie[]) => this._favorites$$.next(movies));
  }

  private _updateFavorites(id: string): void {
    const updatedValue: IMovie[] = this._favorites$$.getValue()
      .filter((movie: IMovie) => movie.idIMDB !== id);

    return this._favorites$$.next(updatedValue);
  }
}
