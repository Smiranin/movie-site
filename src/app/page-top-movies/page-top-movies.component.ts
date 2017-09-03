import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/services/movie.service';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-page-top-movies',
  templateUrl: './page-top-movies.component.html',
})
export class PageTopMoviesComponent implements OnInit {

  public movies: Observable<IMovie[]>;

  public constructor(
    private movieService: MovieService,
  ) {
  }

  public ngOnInit() {
    this.movies = this.movieService.getTop();
  }
}
