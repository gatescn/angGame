import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
MatGridListModule,
 MatCheckboxModule,
 MatCardModule,
 MatProgressSpinnerModule,
MatToolbarModule} from '@angular/material';
import { GameMenuComponent } from './game-menu/game-menu.component';
import { GameSceneComponent } from './game-scene/game-scene.component';
@NgModule({
  imports:      [ BrowserModule, 
  FormsModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatCheckboxModule ],
  declarations: [ AppComponent, GameMenuComponent,GameSceneComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }