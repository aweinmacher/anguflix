import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { DataService } from './data.service';
import { Movie } from './movies/movie-model'; // do I need it here?
import { User } from './user-model'; // do I need it here?


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    private movieService: MovieService, 
    private dataService: DataService, 
  ) { }
}
