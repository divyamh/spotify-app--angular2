import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../artists'

@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: `search.component.html`,
    providers: [SpotifyService],
})
export class SearchComponent  { 
    searchStr: string;
    searchRes: Artist[];

    constructor(private spotifyservice: SpotifyService){

    }
    
    searchMusic() {
        this.spotifyservice.searchMusic(this.searchStr).subscribe(res => {
            this.searchRes = res.artists.items;
        }
        )
    
    }
 }
