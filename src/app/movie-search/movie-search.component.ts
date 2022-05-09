import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor(private comSerr: ComponentsService) { }
  titleSearch: string = '';
  allMovies: Movie[] = [];
  movieResults: Movie[] = [];

  ngOnInit(): void {
    this.allMovies = this.comSerr.getMovies();
    this.movieResults = this.allMovies;
    //result = this.str.filter(s => s.includes('val'));

  }
  filter(){
    if (this.titleSearch == ''){
      this.movieResults = this.allMovies;
    }
    else if (this.titleSearch != ''){
      console.log("Checking if " + this.titleSearch)
      // this.movieResults = this.movieResults.filter(s => s.name.includes('val'))
      this.movieResults = this.allMovies.filter(s => s.name.toLowerCase().includes(this.titleSearch.toLowerCase()))
    }

  }



  toggleView(newView: string, movie: Movie){
    this.comSerr.changeCurrentView(newView, movie)
  }

}
