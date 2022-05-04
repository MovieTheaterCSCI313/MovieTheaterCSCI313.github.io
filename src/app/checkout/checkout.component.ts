import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() seats!: number[];

  constructor() { }

  ngOnInit(): void {
    console.log("Checkout Component");
    console.log("recived " + this.seats.length + " values")
  }

}
