import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource,MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrls: ['./seat-selector.component.css']
})
export class SeatSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  seatList: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  seatAvailabilityList: boolean[] = [];
  rows: number[] = [1,2,3,4,5];
  seats: number[] = [1,2,3,4,5];
  //temp storage seat selection array
  tss: number[] = [];
  selectSeat(rowNumber: number, seatNumber: number): number{

    
    return  seatNumber;
  }
  //needs implementation
  seatTaken(rowNumber: number, seatNumber: number): boolean{
    

    return true;
  }
  //will return an array of taken seats and for storage, needs implementation
  seatAvailability(){

  }
  

  

}
