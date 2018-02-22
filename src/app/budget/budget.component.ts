import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { User } from '../user-model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})

export class BudgetComponent implements OnInit {
  user: User = new User();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.user = this.movieService.user;
  }

}
