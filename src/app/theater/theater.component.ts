import { Component, OnInit } from '@angular/core';
import { showtime } from 'src/showtime';
import { ComponentsService } from '../components.service'; //Get component service


@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {

  constructor( private comSerrvice: ComponentsService ) { }

  currentView: string = '';

  importantShowtime!: showtime;

  ngOnInit(): void {
    //Assing the viewChange value to local currentView String
    this.comSerrvice.viewChange.subscribe(value => this.currentView = value); 
    
    this.comSerrvice.changeCurrentView("mainPage"); //display mainPage component by default

    this.comSerrvice.showTimeChange.subscribe(value => this.importantShowtime = value);
     
  }

  isCurrentView(check: string){
    if (this.currentView == check){
      return true;
    }
    return false;
  }


}
