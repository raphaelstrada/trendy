import { Component, OnInit, Input, Output } from '@angular/core';
import { TrendyService } from '../../../../shared/services/trendy.service';
import { PageEvent } from '@angular/material/paginator';
import { map, take } from "rxjs/operators";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


interface Album { id: number, name: string, artist_id: string, year_released: number };
interface Artist { id: number, name: string, cover: string };
interface Song { track: number, name: string };

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
  providers: [TrendyService]
})
export class SongListComponent implements OnInit {
  constructor(
    private trendyService: TrendyService,
    private router: Router,
    public dialog: MatDialog
  ) { }
  @Input() albums: Album[];
  @Input() artists: Artist[];
  @Input() songs: Song[];

  currentAlbums: any;
  currentArtist: Artist[];
  currentSongs: Song[];
  allTracks: Song[];
  selectedArtistID: string;
  $sorting: number = 1;
  $allSongCount: number = 0;

  songsLength: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;
  showFirstLastButtons = true;

  setAlbums(id: string) {
    this.trendyService.getAlbumById(id).subscribe((response: Album[]) => {
      this.currentAlbums = response;
      this.setArtistByAlbum(this.currentAlbums);
      this.setCurrentSongs(this.currentAlbums);
      this.$getAllTracks();
    })
  }

  $getAllTracks() {
    this.trendyService.getAllTracks().subscribe((response: Song[]) => {
      this.allTracks = response;
      this.$allSongCount = response.length;
    })
  }

  setAlbumsByArtist(artist_id: string) {
    this.trendyService.getAlbumByArtist(artist_id).subscribe((response: Album[]) => {
      this.currentAlbums = response;
      this.setCurrentSongs(this.currentAlbums);
      this.setArtistByAlbum(this.currentAlbums);
    })
  }

  setArtistByAlbum(albums) {
    const { artist_id } = albums[0];
    this.trendyService.getArtistByAlbum(artist_id).subscribe((response: Artist[]) => {
      this.currentArtist = response
    })
  }
  $resort() {
    this.$sorting = this.$sorting * -1;
    this.setAlbumsByArtist(this.selectedArtistID);
  }

  setCurrentSongs(albums) {
    let qs: string = "";
    for (let i: number = 0; i < albums.length; i++) qs += "album_id=" + albums[i].id + "&";
    this.trendyService.getAlbumTracks(qs)
      .pipe(
        take(1),
        map((events: any) => {
          return events
            .sort((a, b) => (a.id - b.id) * this.$sorting)
            .map((song) => {
              song.artist = this.currentArtist && this.currentArtist[0].name;
              return song;
            })
        })
      )
      .subscribe((response: Song[]) => {
        this.pageIndex = 0;
        this.currentSongs = response
        this.songsLength = response.length;
      })

  }

  handlePaginationEvent(event: PageEvent) {
    this.songsLength = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  hightlightRow(currentAlbums, albumID) {
    return currentAlbums.filter(album => album.id === albumID).length;

  }

  changeArtistHandle($event) {
    this.selectedArtistID = $event.id;
    this.setAlbumsByArtist($event.id);
  }
  changeAlbumHandle($event) {
    this.setAlbums($event.id);
  }
  goToBottom() {
    setTimeout(() => {
      window.scroll({
        top: document.body.scrollHeight / 2,
        left: 0,
        behavior: 'smooth'
      });
    }, 300);
  }


  openDialog() {
    const dialogRef = this.dialog.open(CreditsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  async ngOnInit() {
    //initial album
    const INITIAL_ARTIST_ID = "1";
    this.selectedArtistID = INITIAL_ARTIST_ID;
    this.setAlbums(this.selectedArtistID);
  }
}

@Component({
  selector: 'app-credits-dialog',
  templateUrl: 'credits-dialog.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class CreditsDialogComponent {
  constructor(private router: Router) { }
  goHome = () => {
    this.router.navigateByUrl('/');
  }
}