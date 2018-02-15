import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';

import { MovieService } from './movie.service';
import { CartComponent } from './cart/cart.component';
import { BudgetComponent } from './budget/budget.component';
import { FormComponent } from './form/form.component';
import { BoxComponent } from './box/box.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MoviesComponent,
    CartComponent,
    BudgetComponent,
    FormComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
