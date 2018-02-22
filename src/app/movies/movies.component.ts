import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MovieService } from '../movie.service';
import { Movie } from './movie-model';
import { User } from '../user-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit {
  title: string = "All Movies";
  movies: Movie[];
  searchText: string = '';
  constructor(
    private dataService: DataService,
    private movieService: MovieService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.dataService.getMovies()
      .subscribe(data => {
        this.movies = data;
        console.log(data);
      });
  }

  addToCart(movie: Movie) {
    this.movieService.selectMovie(movie);
  }

  searchMovies(newText) {
    this.dataService.searchMovies(newText)
      .subscribe(data => {
        this.movies = data;
        console.log(data);
      });
  }

}
