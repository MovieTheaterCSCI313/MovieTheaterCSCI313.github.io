import { Injectable } from '@angular/core';
import { moviesList } from './data/moviesList';
import { Movie } from './movie';
@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor() { }
  movies: Movie[] =[
    {
        name: "Spider-Man: No Home",
        genre: "action",
        rating: "PG",
        description: "Spider man who has spider powers does spider things. Wow",
        imageSrc: "/assets/images/SpoodermanNoHome.jpg"
    },
    {
        name: "Morbious",
        genre: "Action/Adventure",
        rating: "M",
        description: "He's like a vampire or something I think?"
    },
    {
        name : "Sanic",
        genre: "Action/Comdedy",
        rating: "PG",
        description: "He is the fast blue hedge boi. He consumes the CHILI DOG"
    },
    {
        name: "The bat, man",
        genre: "Action/Adventure",
        rating: "PG-13",
        description: "There is a man who bats around with this bat powers. Riddle question time."
    }
  ]
  
  //MoviesList = moviesList.BigList; //I had to do this because it didn't like me directly import the JSON. Don't ask why.

  getMovies(){
    return this.movies;
  }
}
