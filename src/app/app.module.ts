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
    CheckoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
