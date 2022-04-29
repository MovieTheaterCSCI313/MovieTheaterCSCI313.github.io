import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service'; //Get component service


@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {

  constructor( private comSerrvice: ComponentsService ) { }

  currentView: string = '';

  ngOnInit(): void {
    //Assing the viewChange value to local currentView String
    this.comSerrvice.viewChange.subscribe(value => this.currentView = value); 
    this.comSerrvice.changeCurrentView("mainPage"); //display list of contacts by default
  }
  isCurrentView(check: string){
    console.log("Current view is " + this.currentView )
    console.log("view to check against is " + check)
    if (this.currentView == check){
      console.log("Was true");
      return true;
    }
    console.log("Was false");
    return false;
  }


}
