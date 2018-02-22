import { Movie } from './movies/movie-model';

export class User {
    name: string;
    budget: number;
    myMovies: Movie[];

    constructor(name:string = 'anonymous', budget:number = 10) {
        this.name = name;
        this.budget = budget;
        this.myMovies = [];
    }

}