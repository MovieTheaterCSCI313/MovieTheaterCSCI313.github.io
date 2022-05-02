import { Injectable } from '@angular/core';
import { movies } from './data/moviesList';
import { showTimes } from './data/showtimes';

import { Subject } from 'rxjs';
import { Movie } from './movie';
import { showtime } from 'src/showtime';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  
  
  getMovies(){
    return movies;
  }
  getShowTimes(){
    return showTimes;
  }
  //Creating value to store the current view to display, ensure it can be subscribed to
  viewChange: Subject<any> = new Subject<any>();
  currentView: string = "";

  movieOfInterest!: Movie;

  showTimeChange: Subject<any> = new Subject<any>();
  showTimeOfInterest!: any;

  changeCurrentView(newView: string, impMovie?: Movie, impShowTime?: showtime){
    this.currentView = newView;
    this.viewChange.next(this.currentView)

    if(typeof impMovie !== "undefined"){ 
      this.movieOfInterest = impMovie;

    }
    if(typeof impShowTime !== "undefined"){ 

      this.showTimeOfInterest = impShowTime;
      this.showTimeChange.next(this.showTimeOfInterest)

    }
  }
  constructor() {
    
    this.viewChange.subscribe((value) => {
      this.currentView = value
    });
    this.showTimeChange.subscribe((value) => {
      this.showTimeOfInterest = value
    });
  }

}
