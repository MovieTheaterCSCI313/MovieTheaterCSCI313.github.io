import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private comSerrvice: ComponentsService) { }

  ngOnInit(): void {
  }

  toggleView(newView: string){
    this.comSerrvice.changeCurrentView(newView) 
  }
}
