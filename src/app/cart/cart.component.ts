import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MovieService } from '../movie.service';
import { Movie } from '../movies/movie-model';
import { User } from '../user-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  title:string = "My Collection";
  movies: Movie[];
  searchText: string = '';
  
  constructor(private movieService: MovieService) { }

  ngOnInit() { 
    this.movies = this.movieService.getSelected(); 
  }

  removeFromCart(movie:Movie) {
    this.movieService.removeMovie(movie._id);
  }

  updateSearchText(newText) {
    this.searchText = newText;
  }

}
