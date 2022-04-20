import { Injectable } from '@angular/core';
import {Movie} from './movie'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DatabaseAccessService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http
      .get<Movie[]>(
        'https://studentdataclass-default-rtdb.firebaseio.com/' + 'student.json'
      )
      .pipe(
        map((responseData) => {
          const studentArray: Movie[] = [];
          for (const key in responseData) {
            studentArray.push(responseData[key]);
          }
          return studentArray;
        })
      );
  }


}
