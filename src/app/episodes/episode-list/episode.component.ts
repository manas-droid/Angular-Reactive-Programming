import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode-classes/episode';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html'
})
export class EpisodeComponent implements OnInit {

  
  allEpisodes$ = this.episodeService.allEpisodes$.pipe();

  constructor(private episodeService:EpisodeService) { }

  ngOnInit(): void {
  }

  onEpisodeSelect(ep:Episode){
    this.episodeService.addLikedEpisode(ep);
  }

}
