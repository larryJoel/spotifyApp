import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify Service listo');
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      "Authorization": 'Bearer BQDELuiykjhmgGzQbBMEBvnK5VvPzTIGjttSX00w-ehSq-J07FHyWLpHq7OFfBcz8uRotIjKScbDxOJgU2w'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit = 20', {headers});
      }
  }
