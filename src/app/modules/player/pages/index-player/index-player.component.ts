import { Component, Input, OnInit } from '@angular/core';
import { TrendyService } from '../../../../shared/services/trendy.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Component({
  selector: 'app-index-player',
  templateUrl: './index-player.component.html',
  styleUrls: ['./index-player.component.scss']
})

export class IndexPlayerComponent implements OnInit {
  constructor(private trendyService: TrendyService) { }
  albums: Observable<any[]>;
  artists: Observable<any[]>;
  ngOnInit() {
    this.trendyService.getAllAlbums().subscribe((response: Observable<any[]>) => this.albums = response);
    this.trendyService.getArtists()
      .pipe(
        take(1),
        map((events: any) => {
          return events
            .map((artist) => {
              // get it from spotify , maybe next iteration :)
              artist.cover = '/assets/images/artist.png';
              return artist;
            });
        })
      )
      .subscribe((response: Observable<any[]>) => {
        this.artists = response;
      });
  }
}
