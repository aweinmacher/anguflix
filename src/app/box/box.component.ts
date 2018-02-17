import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movies/movie-model';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})


export class BoxComponent implements OnInit {
  @Input() movie: Movie;
  @Output() onChangeCartEvent:EventEmitter<Movie> = new EventEmitter();

  constructor() {}
  ngOnInit() { }
  
  changeCart() {
    this.onChangeCartEvent.emit(this.movie);
  }

}

// to pass the function from parent - "leaves" should be dumn