import { Injectable } from '@angular/core';
import { Movie } from './movies/movie-model';
import { User } from './user-model';


@Injectable()
export class MovieService {
  user: User = new User('Anna');

  constructor() { }

  getSelected(): Movie[] {
    return this.user.myMovies;
  }

  _movieExistInSelected(movie:Movie):boolean {
    let index = this.user.myMovies.findIndex(item => item.id === movie.id);
    return index > -1;
  }
  _enoughBudget(movie:Movie):boolean {
    return this.user.budget - movie.price >= 0;
  }

  selectMovie(movie:Movie) {
    if (!this._movieExistInSelected(movie) && this._enoughBudget(movie)) {
        this.user.myMovies.push(movie);
        this.user.budget -= movie.price;
    }
  }
  
  removeMovie(id: number) {
    let index = this.user.myMovies.findIndex(item => item.id===id);
    this.user.budget += this.user.myMovies[index].price;
    this.user.myMovies.splice(index, 1);
  }

}
