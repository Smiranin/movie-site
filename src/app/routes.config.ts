import { Routes } from '@angular/router';

import { PageTopMoviesComponent } from './page-top-movies/page-top-movies.component';
import { PageChronologyMoviesComponent } from './page-chronology-movies/page-chronology-movies.component';
import { PageFavoriteMoviesComponent } from './page-favorite-movies/page-favorite-movies.component';
import { TrailerPreviewComponent } from "./shared/components/trailer-preview/trailer-preview.component";

export const ROUTES: Routes = [
  { path: '', redirectTo: 'page-top', pathMatch: 'full' },
  { path: 'page-top', component: PageTopMoviesComponent },
  { path: 'page-chronology', component: PageChronologyMoviesComponent },
  { path: 'page-favorite', component: PageFavoriteMoviesComponent },
  {
    path: ':trailerId',
    component: TrailerPreviewComponent,
    outlet: 'preview-trailer',
  }
];
