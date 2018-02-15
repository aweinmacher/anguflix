import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movies/movie-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private movieService: MovieService) { }
}
