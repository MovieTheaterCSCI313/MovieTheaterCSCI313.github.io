
import { Component, OnInit, Input } from '@angular/core';
import { showtime } from 'src/showtime';
import { ComponentsService } from '../components.service'; //Get component service
import { DatabaseAccessService } from '../database-access.service';
import { Seat } from '../seat';
import { Seats } from '../seats';

@Component({
  selector: 'app-seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrls: ['./seat-selector.component.css']
})
export class SeatSelectorComponent implements OnInit {
  @Input() showtime!: showtime;



  constructor( 
    private comSerrvice: ComponentsService ,
    private dbSerrvice: DatabaseAccessService
    
    ) { }
    
  seatsAvail: boolean[] = [];

  ngOnInit(): void {

    //get array of booleans and overwite the seat array, from service
    this.fetchData(0);
    console.log( typeof this.seatsAvail[2] )
    this.seatAvailabilityCheck();
  }
  fetchData(num: number) {
    this.dbSerrvice.getSeatAvailablity(num).subscribe((data) => {
      this.seatsAvail = data;
    });
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
    for(let i = 0; i < this.seatSelection.length; i++) {
      
      if (seat.row === this.seatSelection[i].row && seat.seatNumber == this.seatSelection[i].seatNumber){
        this.seatSelection.splice(i, 1);
        break;
      }
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
    for (let i = 0; i < this.seatList.length; i++){
      this.seatList[i].available == this.seatsAvail[i];
    }

  }

  seatIndex: number[] = [];
  toggleView(newView: string){
    for (let i =0; i < this.seatSelection.length; i ++){
      this.seatIndex.push(this.seatList.indexOf(this.seatSelection[i]))
    }

   this.comSerrvice.changeCurrentView(newView, undefined, undefined, this.seatIndex); 
  } 
}
