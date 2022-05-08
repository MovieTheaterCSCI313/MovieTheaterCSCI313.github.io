import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service'; //Get component service
import { Movie } from '../movie'; //Get the movie interface
import { showTimes } from '../data/showtimes';
import { movies } from '../data/moviesList';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor( private comSerrvice: ComponentsService  ) { }
  
  MoviesList: Movie[] = this.comSerrvice.getMovies();
  MoviesDisplay: Movie[] = [];
  
  ngOnInit(): void {
   for (let i = 0; i < 3; i++){
     showTimes[i].movieID
    this.MoviesDisplay.push( this.MoviesList[showTimes[i].movieID] )
   }
    
  }

  toggleView(newView: string, movie: Movie){
    this.comSerrvice.changeCurrentView(newView, movie)
  }
}
