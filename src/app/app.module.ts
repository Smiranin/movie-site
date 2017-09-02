import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from './shared/shared.module';

import { NgxChartsModule } from '@swimlane/ngx-charts';


import { AppComponent } from './app.component';
import { PageTopMoviesComponent } from './page-top-movies/page-top-movies.component';
import { PageChronologyMoviesComponent } from './page-chronology-movies/page-chronology-movies.component';
import { PageFavoriteMoviesComponent } from './page-favorite-movies/page-favorite-movies.component';

import { ROUTES } from './routes.config';

@NgModule({
  declarations: [
    AppComponent,
    PageTopMoviesComponent,
    PageChronologyMoviesComponent,
    PageFavoriteMoviesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    SharedModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
