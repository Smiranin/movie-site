import { Component, OnInit } from '@angular/core';
import { MoviesChronologyService } from "../shared/services/chronology.service";
import { MovieService } from "../shared/services/movie.service";

import 'rxjs/add/operator/switchMap';
import { colors } from "../data/colors";

@Component({
  selector: 'app-page-chronology-movies',
  templateUrl: './page-chronology-movies.component.html',
  styleUrls: ['./page-chronology-movies.component.scss']
})
export class PageChronologyMoviesComponent implements OnInit {

  public view: any[] = [700, 400];
  public showLegend = true;
  public colorScheme = {
    domain: colors
  };
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public data: any[] = [];


  public constructor(private _movieService: MovieService,
                     private _moviesChronologyService: MoviesChronologyService) {
  }

  public ngOnInit(): void {
    this._movieService.getTop()
      .switchMap(this._moviesChronologyService.generateChronology)
      .subscribe((data: { [key: string]: IMovie[] }) => this._generateDataForChart(data));
  }

  private _generateDataForChart(data: { [key: string]: IMovie[] }): void {
    Object.keys(data).forEach((key: string) => {
      this.data.push(
        { name: key, value: data[key].length }
      );
    });
  }
}
