import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from './movie-model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit {
  title:string = "All Movies";
  movies: Movie[];

  constructor(private movieService: MovieService) { }
  ngOnInit() { 
    this.movies = this.movieService.getMovies();
    // this.movies = all.filter(item => !item.selected)
  }

}
