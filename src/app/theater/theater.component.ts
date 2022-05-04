import { Component, OnInit } from '@angular/core';
import { showtime } from 'src/showtime';
import { ComponentsService } from '../components.service'; //Get component service
import { DatabaseAccessService } from '../database-access.service';

import { showTimes } from '../data/showtimes';



@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {

  constructor( 
    private comSerrvice: ComponentsService,
    private dataSerrvice: DatabaseAccessService 
    ) { }

  currentView: string = '';

  importantShowtime!: showtime;
  seatsArray: number[] =[];

  tempBool: boolean = true; //Detle this 
  ngOnInit(): void {
    //Assing the viewChange value to local currentView String
    this.comSerrvice.viewChange.subscribe(value => this.currentView = value); 
    
    this.comSerrvice.changeCurrentView("mainPage"); //display mainPage component by default

    this.comSerrvice.showTimeChange.subscribe(value => this.importantShowtime = value);
     
    this.comSerrvice.seatsChange.subscribe(value => this.seatsArray = value);

    //Delete this for loop later

    for (let i =0; i < 25; i ++){
      this.emptySeats.push(this.tempBool);
    }
    this.showTimesArray = this.comSerrvice.getShowTimes();
    console.log("SEats are " + this.emptySeats.length);
  }

  isCurrentView(check: string){
    if (this.currentView == check){
      return true;
    }
    return false;
  }



  //Create array of 25 boolean values //(number of seats in theather.)
  emptySeats: boolean[] = [];
  showTimesArray: any[] = [];

  tempMakeDatabase(){
    for (let i = 0; i < this.showTimesArray.length; i ++){
      this.dataSerrvice.addSeats(i, this.emptySeats).subscribe();
    }
  }


}
