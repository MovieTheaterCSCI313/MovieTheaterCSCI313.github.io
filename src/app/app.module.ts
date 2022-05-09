import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TheaterComponent } from './theater/theater.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SeatSelectorComponent } from './seat-selector/seat-selector.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import { GreenGooComponent } from './green-goo/green-goo.component';

import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    TheaterComponent,
    MovieCardComponent,
    MainPageComponent,
    NavBarComponent,
    MovieSearchComponent,
    SearchbarComponent,
    MovieDetailsComponent,
    SeatSelectorComponent,
    CheckoutComponent,
    GreenGooComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
