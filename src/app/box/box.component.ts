import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movies/movie-model';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})


export class BoxComponent implements OnInit {
  @Input() movie: Movie;
  constructor(private movieService: MovieService) { }

  ngOnInit() { }

}
