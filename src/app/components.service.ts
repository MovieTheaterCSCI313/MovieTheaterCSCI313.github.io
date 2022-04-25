import { Injectable } from '@angular/core';
import moviesList from './json/moviesList.json'

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor() { }
  MoviesList = moviesList.BigList; //I had to do this because it didn't like me directly import the JSON. Don't ask why.

  getMovies(){
    return this.MoviesList;
  }
}
