import { Component, OnInit, Input } from '@angular/core';
import { showtime } from 'src/showtime';
import { DatabaseAccessService } from '../database-access.service';
import { ComponentsService } from '../components.service';
import { showTimes } from '../data/showtimes';
import { Seats } from '../seats';
import { Seat } from '../seat';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() seats!: number[];
  @Input() showTime!: showtime;
  allSeats!: Seat[];

  constructor(private dbSerrvice: DatabaseAccessService, private comSerrvice: ComponentsService) { }
  
  showTimeId!: number;
  price: number=0;
  ngOnInit(): void {
    this.showTimeId = showTimes.indexOf(this.showTime);
    console.log(this.showTimeId)
    this.allSeats = Seats;
    //$5 per seat
    this.price = this.seats.length * 5
  }
  
  buySeats(){
    this.seats.forEach(element => {
      this.dbSerrvice.updateSeatAvailability(this.showTimeId, element).subscribe();
    });
    this.toggleView()

  }
  toggleView(){
   this.comSerrvice.changeCurrentView('mainPage'); 
  } 
}
