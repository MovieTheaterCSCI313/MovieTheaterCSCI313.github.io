import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import { MatTableModule } from '@angular/material/table';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
