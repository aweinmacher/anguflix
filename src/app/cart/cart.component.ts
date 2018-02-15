import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movies/movie-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  title:string = "My Collection";
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() { 
    this.movies = this.movieService.getSelected(); 
  }

}
