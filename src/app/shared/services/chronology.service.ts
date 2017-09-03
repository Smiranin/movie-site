import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of';

@Injectable()
export class MoviesChronologyService {

  public generateChronology(movies: IMovie[]): Observable<{ [key: string]: IMovie[] }> {
    const result = {};
    movies.forEach((movie: IMovie) => {
      const decadeKey: string = movie.year.replace(/\d$/, '0');
      if (Array.isArray(result[decadeKey])) {
        result[decadeKey].push(movie);
      } else {
        result[decadeKey] = [movie];
      }
    });
    return Observable.of(result);
  }
}
