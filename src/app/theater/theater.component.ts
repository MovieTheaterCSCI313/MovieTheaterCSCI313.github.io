import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service'; //Get component service


@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {

  constructor( private comSerrvice: ComponentsService ) { }

  ngOnInit(): void {
    
  }

}
