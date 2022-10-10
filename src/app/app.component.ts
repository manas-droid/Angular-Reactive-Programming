import { Component } from '@angular/core';
import { map } from 'rxjs';
import { EpisodeService } from './episodes/episode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rickandmorty';
  likeCount$ = this.episode.likedEpisodes$.pipe(map(val => val.length));

  constructor(private episode: EpisodeService){}
  
}
