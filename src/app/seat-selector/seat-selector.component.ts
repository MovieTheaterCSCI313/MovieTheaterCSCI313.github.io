
import { Component, OnInit, Input } from '@angular/core';
import { showtime } from 'src/showtime';
import { ComponentsService } from '../components.service'; //Get component service
import { Seat } from '../seat';
import { Seats } from '../seats';

@Component({
  selector: 'app-seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrls: ['./seat-selector.component.css']
})
export class SeatSelectorComponent implements OnInit {
  @Input() showtime!: showtime;

  
  constructor( private comSerrvice: ComponentsService ) { }


  ngOnInit(): void {

    //get array of booleans and overwite the seat array, from service

  }
  //data source for table
  seatList: Seat[] = Seats;

  //temp storage for seat selection
  seatSelection: Seat[] = [];
  //adds seat to seatSelection array ---untested
  selectSeat(seat: Seat): void{
    this.seatSelection.push(seat);
  }
  //removes seat from seatSelection array ---untested
  deselectSeat(seat: Seat): void {
    if (this.seatSelection.length == 1) {
      this.seatSelection.splice(0, 1);
      return;
    }
    for(var i : number = 0; i <= this.seatSelection.length; i++) {
      if (seat.row == this.seatSelection[i].row && seat.seatNumber == this.seatSelection[i].seatNumber)
        this.seatSelection.splice(i, 1);
        break;
    }
  }
  //called by button onClick method
  seatSelectionToggle(seat: Seat):void{
    if (this.seatSelection.length == 0)
      this.selectSeat(seat);
    else if (this.seatSelection.includes(seat))
      this.deselectSeat(seat);
    else 
      this.selectSeat(seat);

  }
  //clears all seat selections
  clearSeatSelections(): void{
    this.seatSelection = [];
  }
 



  //will return an array of seats availablility in order, needs implementation from service
  seatAvailabilityCheck(): void{
    //pass aray to db service
  }
  

  

  
  toggleView(newView: string){


   this.comSerrvice.changeCurrentView(newView, undefined, undefined /*,array */); 
  }
}
