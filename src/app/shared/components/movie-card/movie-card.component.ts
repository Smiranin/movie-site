import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { MovieFavoriteService } from "../../services/favorite-movie.service";


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: IMovie;

  public isFavorited: boolean = false;

  public constructor(
    private _movieFavoriteService: MovieFavoriteService,
  ) {
  }

  public ngOnInit() {
    this.isFavorited = this._movieFavoriteService.getStatus(this.movie.idIMDB)
  }

  public toggleFavoriteState(status: boolean, id: string): void {
    this.isFavorited = status;
    status
      ? this._movieFavoriteService.add(id)
      : this._movieFavoriteService.remove(id);
  }
}
