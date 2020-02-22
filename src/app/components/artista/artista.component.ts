import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
 
artista: any ={};
topTracks: any[]=[];

loadingArtist: boolean;

  constructor( private router: ActivatedRoute,
              private spotify: SpotifyService) {

                this.loadingArtist = true;

                this.router.params.subscribe( params =>{
                  console.log(params['id']);
                  this.getArtista( params['id']);
                  this.getTopTraks ( params['id']);
                });
               }

               getArtista( id: string ){
                 this.spotify.getArtista (id)
                    .subscribe( artista => {
                      console.log(artista);
                      this.artista = artista;
                      this.loadingArtist = false;
                    })
               }

               getTopTraks ( id:string){

                this.spotify.getTopTraks( id )
                .subscribe( topTracks =>{
                    console.log(topTracks);
                    this.topTracks=topTracks;
                });
               }

  

}
