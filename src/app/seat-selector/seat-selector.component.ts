import { Component, OnInit } from '@angular/core';
import { Seat } from '../seat';
import { Seats } from '../seats';

@Component({
  selector: 'app-seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrls: ['./seat-selector.component.css']
})
export class SeatSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  //clears all seat selections
  clearSeatSelections(): void{
    this.seatSelection = [];
  }



  //will return an array of seats availablility in order, needs implementation from service
  seatAvailabilityCheck(): void{

  }
  

  

}
