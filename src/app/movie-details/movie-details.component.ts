import { Component, OnInit, Input } from '@angular/core';
import { ComponentsService } from '../components.service';
import { Movie } from '../movie';
import { showTimes } from '../data/showtimes';
import { showtime } from 'src/showtime';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor( private comSerrvice: ComponentsService  ) { }
  MoviesList: Movie[] = this.comSerrvice.getMovies();
  ShowTimesList: showtime[] = this.comSerrvice.getShowTimes();


  ngOnInit(): void {
    for (let i = 0; i < this.ShowTimesList.length; i++) {
      if (this.ShowTimesList[i].movieID == this.movieID){
        this.correctShowtimes.push(this.ShowTimesList[i])
      }
    }
    
  }
  //Get movie to display details of; that value is stored in component.
  movieToShow: Movie =this.comSerrvice.movieOfInterest
  //Find that movies position in the array, store index as ID
  movieID: number = this.MoviesList.indexOf(this.movieToShow)
  //Make empty array of showtimes, then fill with matching.
  correctShowtimes: showtime[] = []
 

  

  toggleView(newView: string, newShowtime: showtime){

    this.comSerrvice.changeCurrentView(newView, undefined ,newShowtime) //second value is undefined because we don't have a movie to pass in.
  }
}
