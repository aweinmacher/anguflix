import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MovieService } from '../movie.service';
import { Movie } from './movie-model';
import { User } from '../user-model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit {
  title: string = "All Movies";
  movies: Movie[];

  constructor(
    private dataService: DataService,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.movies = this.dataService.getMovies();
  }

  addToCart(movie: Movie) {
    this.movieService.selectMovie(movie);
  }

}
