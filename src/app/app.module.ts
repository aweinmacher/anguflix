import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';

import { MovieService } from './movie.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
