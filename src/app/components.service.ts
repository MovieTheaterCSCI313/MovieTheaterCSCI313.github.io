import { Injectable } from '@angular/core';
import { movies } from './data/moviesList';
//import { Movie } from './movie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  
  
  getMovies(){
    return movies;
  }

  //Creating value to store the current view to display, ensure it can be subscribed to
  viewChange: Subject<any> = new Subject<any>();
  currentView: string = "";

  changeCurrentView(newView: string){
    this.currentView = newView;
    this.viewChange.next(this.currentView)
  }

  constructor() {
    console.log("In service. Current View is " + this.currentView)
    this.viewChange.subscribe((value) => {
      this.currentView = value
    });
    console.log("and now ViewChange is  " + this.viewChange)
  }

}
