import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player-information',
  template:`<h3>{{PlayerName}} | {{CurrentPlayerLevel}}</h3>`,
  styleUrls: ['./player-information.component.css']
})
export class PlayerInformationComponent implements OnInit {

  PlayerName: string = ""
  @Input() 
  set playerName(playerName: string){
   this.PlayerName = playerName;
  }
  CurrentPlayerLevel: number = 1;

  constructor() { }

  ngOnInit() {
  }

}