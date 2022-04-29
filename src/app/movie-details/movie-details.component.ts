import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor( private comSerrvice: ComponentsService ) { }

  ngOnInit(): void {
  }
  toggleView(newView: string){
    this.comSerrvice.changeCurrentView(newView)
  }
}
