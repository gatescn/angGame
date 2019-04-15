import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.css']
})
export class GameMenuComponent implements OnInit {


  playerName: string = "TestPlayer";


  constructor() { }

  ngOnInit() {
  }

}