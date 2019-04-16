import { Component, OnInit } from '@angular/core';
import {PlayerCard} from './player-card';
import {PlayerInformation} from './player-information'
import {DefaultplayerData} from './defaultplayer-data';

@Component({
  selector: 'game-scene',
  templateUrl: './game-scene.component.html',
  styleUrls: ['./game-scene.component.css']
})
export class GameSceneComponent implements OnInit {


  NumberOfPlayers: number = 2;
  data: DefaultplayerData = new DefaultplayerData();
  CardDeck: PlayerCard[] = null;


  constructor() { }

  ngOnInit() {
    
   let dummyData: string[]  = this.data.PlayerNames;
    for (var _i = 0; _i < this.NumberOfPlayers; _i++) {
        this.AddPlayers(dummyData[_i]);
    }
  }
  AddPlayers(name: string){
    let card: PlayerCard = new PlayerCard(
      name,
      1,
      2
    ); 
    this.CardDeck.push(
      card
    );
  }

}