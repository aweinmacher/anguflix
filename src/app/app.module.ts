import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MovieService } from './movie.service';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';

import { CartComponent } from './cart/cart.component';
import { BudgetComponent } from './budget/budget.component';
import { FormComponent } from './form/form.component';
import { BoxComponent } from './box/box.component';

import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MoviesComponent,
    CartComponent,
    BudgetComponent,
    FormComponent,
    BoxComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MovieService,
    DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
