import { Injectable } from '@angular/core';
import { Movie } from './movies/movie-model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]> ('https://anguflix-api.herokuapp.com/api/movies');
  }

  getMovieById(id): Observable<Movie> {
    return this.http.get<Movie> (`https://anguflix-api.herokuapp.com/api/movies/${id}`);
  }

  searchMovies(str): Observable<Movie[]> {
    console.log(str);
    return this.http.get<Movie[]>(`https://anguflix-api.herokuapp.com/api/movies?title=${str}`);
  }

}
