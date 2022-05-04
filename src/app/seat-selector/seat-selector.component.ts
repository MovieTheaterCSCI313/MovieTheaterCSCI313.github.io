import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit, Input } from '@angular/core';
import { showtime } from 'src/showtime';
import { ComponentsService } from '../components.service'; //Get component service

@Component({
  selector: 'app-seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrls: ['./seat-selector.component.css']
})
export class SeatSelectorComponent implements OnInit {
  @Input() showtime!: showtime;

  
  constructor( private comSerrvice: ComponentsService ) { }


  ngOnInit(): void {
   
  }

  
  toggleView(newView: string){


   this.comSerrvice.changeCurrentView(newView, undefined, undefined /*,array */); 
  }
}
