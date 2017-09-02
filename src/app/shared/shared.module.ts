import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { YoutubePlayerModule } from 'ng2-youtube-player';

import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { TrailerPreviewComponent } from './components/trailer-preview/trailer-preview.component';
import { PopupComponent } from './components/popup/popup.component';

import { MovieService } from './services/movie.service';
import { MovieFavoriteService } from './services/favorite-movie.service';
import { MoviesChronologyService } from "./services/chronology.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    YoutubePlayerModule,
  ],
  exports: [
    MovieCardComponent,
    TrailerPreviewComponent
  ],
  declarations: [
    MovieCardComponent,
    TrailerPreviewComponent,
    PopupComponent
  ],
  providers: [
    MovieService,
    MovieFavoriteService,
    MoviesChronologyService
  ],
})
export class SharedModule {
}
