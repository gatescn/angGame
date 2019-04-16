import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
 MatCheckboxModule,
 MatCardModule,
 MatProgressSpinnerModule,
MatToolbarModule} from '@angular/material';
import { GameMenuComponent } from './game-menu/game-menu.component';
import { PlayerInformationComponent } from './player-information/player-information.component';
import { GameSceneComponent } from './game-scene/game-scene.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';
@NgModule({
  imports:      [ BrowserModule, 
  FormsModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatCheckboxModule ],
  declarations: [ AppComponent, GameMenuComponent, PlayerInformationComponent, GameSceneComponent, PlayingCardComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }