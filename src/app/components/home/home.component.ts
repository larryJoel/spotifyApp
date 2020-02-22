import { Component, OnInit, Input } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  nuevasCanciones: any[]=[];
  loading:boolean;

  //@Input() items: any[] = [];

  constructor(private spotify:SpotifyService) { 
      this.loading = true;
      this.spotify.getNewReleases()
      .subscribe((data: any)=>{
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      });

  }
 

  

}
