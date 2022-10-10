import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodeComponent } from './episodes/episode-list/episode.component';
import {HttpClientModule} from "@angular/common/http"
import { EpisodeService } from './episodes/episode.service';
@NgModule({
  declarations: [
    AppComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EpisodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
