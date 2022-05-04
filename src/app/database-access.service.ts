import { Injectable } from '@angular/core';
import {Movie} from './movie'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DatabaseAccessService {
  
  constructor(private http: HttpClient) { }

  //Returns an array of booleans associated with a showtime
  //based on the inputed id of that showtime.
  //Booleans represent seat availability.
  //True = Available
  //False = Unavailable.
  tempJson: string = '';
  getSeatAvailablity(id: string) {
    this.tempJson = id +".json"
    return this.http
      .get<boolean[]>(
        'https://studentdataclass-default-rtdb.firebaseio.com/' + this.tempJson
      )
      .pipe(
        map((responseData) => {
          const studentArray: boolean[] = [];
          for (const key in responseData) {
            studentArray.push(responseData[key]);
          }
          return studentArray;
        })
      );
  }




  //*************************************************************
  //*************************************************************
  //Temporary method to fill database. Can delete this Mmethod when ready to submit
  //*************************************************************
  //*************************************************************
  jsonName: string = '';
  addSeats(index: number, booleans: boolean[]) {
    this.jsonName = index.toString() + '.json'
    return this.http.put(
      'https://movietheaterdatabase-default-rtdb.firebaseio.com/ '+ this.jsonName,
      booleans
    );
  }

}
