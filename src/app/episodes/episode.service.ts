import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, expand, Observable, reduce, scan, Subject } from 'rxjs';
import { Episode, EpisodeResponse } from './episode-classes/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private readonly URL:string = 'https://rickandmortyapi.com/api/episode';


  public allEpisodes$ = this.http
  .get<EpisodeResponse>(this.URL)
  .pipe(
    expand(data=>data.info.next? this.http.get<EpisodeResponse>(data.info.next)  : EMPTY),
    reduce((acc,data)=>acc.concat(data.results) , [] as Episode[])
  );

  private likedEpisodeAction = new Subject<Episode>();
  private likedEpisodeAction$ = this.likedEpisodeAction.asObservable();

  likedEpisodes$ = this.likedEpisodeAction$.pipe(
    scan((acc,data)=> [...acc , data], [] as Episode[])
  );


  constructor(private http : HttpClient) { }
  
  addLikedEpisode(ep:Episode){
    this.likedEpisodeAction.next(ep);
    console.log(this.likedEpisodes$);
    
  }
}
