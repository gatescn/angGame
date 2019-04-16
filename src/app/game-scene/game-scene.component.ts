import { Component, OnInit } from '@angular/core';
import {PlayerCard} from './player-card';
import {PlayerInformation} from './player-information'

@Component({
  selector: 'game-scene',
  templateUrl: './game-scene.component.html',
  styleUrls: ['./game-scene.component.css']
})
export class GameSceneComponent implements OnInit {


  NumberOfPlayers: number = 2;
  CardDeck: PlayerCard[] = null;


  constructor() { }

  ngOnInit() {
    for (var _i = 0; _i < this.NumberOfPlayers; _i++) {
        this.AddPlayers();
    }
  }
  AddPlayers(){
   
    this.CardDeck.push(

    )


  }

}