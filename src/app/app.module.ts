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
@NgModule({
  imports:      [ BrowserModule, 
  FormsModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatCheckboxModule ],
  declarations: [ AppComponent, GameMenuComponent, PlayerInformationComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }