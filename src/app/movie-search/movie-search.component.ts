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

  //keeps track of checkbox values:
  //for genre
  isGenreAction: boolean = false;
  isGenreAdventure: boolean = false;
  isGenreSciFi: boolean = false;
  isGenreComedy: boolean = false;
  //for rating
  selectedRating: string = '';

  ngOnInit(): void {
    this.allMovies = this.comSerr.getMovies();
    this.movieResults = this.allMovies;
    //result = this.str.filter(s => s.includes('val'));

  }
  filter(genre?: string){
    if (this.titleSearch == ''){
      this.movieResults = this.allMovies;
    }
    else{
      // this.movieResults = this.movieResults.filter(s => s.name.includes('val'))
      this.movieResults = this.allMovies.filter(s => s.name.toLowerCase().includes(this.titleSearch.toLowerCase()))
    }

    //filter by rating
    if (this.selectedRating == ''){
      //do nothing
    }else {
      this.movieResults = this.movieResults.filter(s => s.rating == this.selectedRating)
    }

    //Filter by Genre
    if (this.isGenreAction){
      this.movieResults = this.movieResults.filter(s => s.genre.toLowerCase().includes('action'))
    }
    if (this.isGenreAdventure){
      this.movieResults = this.movieResults.filter(s => s.genre.toLowerCase().includes('adventure'))
    }
    if (this.isGenreSciFi){
      this.movieResults = this.movieResults.filter(s => s.genre.toLowerCase().includes('sci'))
    }
    if (this.isGenreComedy){
      this.movieResults = this.movieResults.filter(s => s.genre.toLowerCase().includes('come'))
    }
  }



  toggleView(newView: string, movie: Movie){
    this.comSerr.changeCurrentView(newView, movie)
  }

}
