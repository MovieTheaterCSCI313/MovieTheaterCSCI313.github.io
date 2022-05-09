import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor(private comSerrvice: ComponentsService) { }

  movieResults: Movie[] = [];

  ngOnInit(): void {
    this.movieResults = this.comSerrvice.getMovies()
  }
  filter(){
    
  }

  toggleView(newView: string, movie: Movie){
    this.comSerrvice.changeCurrentView(newView, movie)
  }

}
