import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component'
import {AboutComponent} from './component/about/about.component';
import {SearchComponent} from './component/search/search.component'
import {ArtistComponent} from './component/artist/artist.component';
import {AlbumComponent} from './component/album/album.component';


const routes:Routes=[
  {path:'',component:SearchComponent},
  {path:'about',component:AboutComponent},
  {path:'artist/:id',component:ArtistComponent},
  {path:'album/:id',component:AlbumComponent}

]

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) , HttpModule, FormsModule],
  declarations: [ AppComponent, NavbarComponent, SearchComponent, ArtistComponent, AlbumComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
