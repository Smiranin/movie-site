import { Component, OnInit } from '@angular/core';
import { MovieService } from "../shared/services/movie.service";
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-page-favorite-movies',
  templateUrl: './page-favorite-movies.component.html',
})
export class PageFavoriteMoviesComponent implements OnInit {

  public movies: Observable<IMovie[]>;

  public constructor(
    private movieService: MovieService,
    ) {}

  public ngOnInit() {
    this.movieService.initFavorites();
    this.movies = this.movieService.favorites$;
  }
}
