import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service'; //Get component service
import { Movie } from '../movie'; //Get the movie interface

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor( private comSerrvice: ComponentsService  ) { }
  
  MoviesList: Movie[] = this.comSerrvice.getMovies();
  
  ngOnInit(): void {

  }

}
