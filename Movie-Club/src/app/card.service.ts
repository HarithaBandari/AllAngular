import { Injectable, Input } from '@angular/core';
import {CardComponent} from './card/card.component';
import { HttpClient } from '@angular/common/http';
import { MovieDetails } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
 private url = 'http://localhost:8080/api/v1/movies';
 private url2 = 'http://localhost:8080/api/v1/';
// private  url = 'http://www.omdbapi.com/?s=+"this.movieNa"+&apikey=12dba97a';
  // private  url = '/assets/data/detail.json';

 constructor(private http: HttpClient) { }

 getWhishList(): Observable<MovieDetails[]> {
return this.http.get<MovieDetails[]>(this.url);
}
}
