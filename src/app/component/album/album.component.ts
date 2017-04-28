import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {Album} from '../../../albums';

@Component({
    moduleId:module.id,
    selector: 'album',
    templateUrl: `album.component.html`,
    providers: [SpotifyService],
})
export class AlbumComponent  { 

    id:string;
    album:Album[];

    constructor(
        private _spotifyService:SpotifyService,
        private _route:ActivatedRoute){

    }

     ngOnInit(){
        this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
            this._spotifyService.getAlbum(id)
                .subscribe( Album => {
                    this.album=Album;
                })
                
        })
    
    }
 }
