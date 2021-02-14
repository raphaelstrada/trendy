import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrendyService {
  constructor(private http: HttpClient) {
  }
  get headers() {
    return new HttpHeaders({ 'Content-Type': 'application/json', Authorization: `Bearer ${environment.validusSecret}` });
  }
  get headersSpotify() {
    return new HttpHeaders(
      {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.spotifySecret}`,
        'Retry-After': '3600'
      });
  }

  getAllArtistAvatar(artist: string) {
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {
      headers: this.headersSpotify
    });
  }
  getAllAlbums() {
    return this.http.get('http://localhost:5000/albums', {
      headers: this.headers
    });
  }
  getAlbumById(id) {
    return this.http.get(`http://localhost:5000/albums?id=${id}`, {
      headers: this.headers
    });
  }
  getArtists() {
    return this.http.get('http://localhost:5000/artists', {
      headers: this.headers
    });
  }

  getArtistByAlbum(artistID: string) {
    return this.http.get(`http://localhost:5000/artists?id=${artistID}`, {
      headers: this.headers
    });
  }

  getAlbumByArtist(artistID: string) {
    return this.http.get(`http://localhost:5000/albums?artist_id=${artistID}`, {
      headers: this.headers
    });
  }

  getAlbumTracks(qs: string) {
    return this.http.get(`http://localhost:5000/songs?${qs}`, {
      headers: this.headers
    });

  }
  getAllTracks() {
    return this.http.get(`http://localhost:5000/songs`, {
      headers: this.headers
    });

  }
  getAlbumArtist(id: string) {
    return this.http.get(`http://localhost:5000/artists/${id}`, {
      headers: this.headers
    });
  }
}
