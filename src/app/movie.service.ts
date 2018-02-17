import { Injectable } from '@angular/core';
import { Movie } from './movies/movie-model';
import { Subscriber } from 'rxjs/Subscriber';
import { Subject } from 'rxjs/Subject';

const MOVIES: Array<Movie> = [
  { id: 0, img: "http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg", title: "Tarzan", price: 3, year: 1999, descrShort: "The movie is about the life of Tarzan. Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan." },
  { id: 1, img: "http://cdn.collider.com/wp-content/uploads/2016/04/the-lion-king-image.jpg", title: "The Lion King", year: 1994, price: 2, descrShort: "A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days." },
  { id: 2, img: "http://img.lum.dolimg.com/v1/images/characters_beautyandthebeast_belle_852af5fe.jpeg?region=0,0,1536,788&width=1200", price: 3, title: "Beauty and the Beast", year: 1991, descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love." },
  { id: 3, img: "http://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/07/sword_in_the_stone_still.jpg", title: "The Sword in the Stone", price: 6, year: 1963, descrShort: "Arthur (aka Wart) is a young boy who aspires to be a knight's squire. On a hunting trip he falls in on Merlin, a powerful but amnesiac wizard who has plans for Wart beyond mere squiredom." },
  { id: 4, img: "http://www.cgmeetup.net/forums/uploads/gallery/album_1392/med_gallery_646_1392_48130.jpg", title: "Beauty and the Beast", year: 2016, price: 3, descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so I would think, given how breath-takingly pretty she is. I mean wow. Rumor has it she'll whip out a wand and turn Gaston into a toad." }
];

const SELECTED: Array<Movie> = [];

@Injectable()
export class MovieService {

  movies: Movie[] = MOVIES;
  selected: Movie[] = SELECTED;
  budget: number = 10;

  budget$: Subject<any> = new Subject();

  constructor() { }


  getMovies(): Movie[] {
    return this.movies;
  }

  getSelected(): Movie[] {
    return this.selected;
  }

  _movieExistInSelected(movie:Movie):boolean {
    let index = this.selected.findIndex(item => item.id === movie.id);
    return index > -1;
  }
  _enoughBudget(movie:Movie):boolean {
    return this.budget - movie.price >= 0;
  }

  selectMovie(id:number) {
    let index = this.movies.findIndex(item => item.id===id);
    let current = this.movies[index];
    
    if (!this._movieExistInSelected(current) && this._enoughBudget(current)) {
        this.selected.push(current);
        this.budget -= current.price;
        this.budget$.next(this.budget);
        console.log(this.budget);
    }
  
  }

  removeMovie(id: number) {
    let index = this.selected.findIndex(item => item.id===id);
    this.selected.splice(index, 1);
  }

  getBudget(): number {
    return this.budget;
  }

}
