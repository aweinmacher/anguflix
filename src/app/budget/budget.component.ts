import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})

export class BudgetComponent implements OnInit {
  budget: number;

  subscription: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.budget = this.movieService.budget;
    this.movieService.budget$.subscribe(updBudget => {
      this.budget = updBudget;
      console.log('change!');
    });
  }

}
