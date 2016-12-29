import { Component, Input } from '@angular/core';
import { AppState } from '../app.service';
import { Player } from './player';
import { XLarge } from './x-large';
import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Component({
	selector:'player-box',
	providers: [
		Player
	],
	templateUrl: './player-box.html',
	styleUrls: [ '../../styles/list-fluid-design.css' ]  
})

export class PlayerBoxComponent {
	@Input() term;
	public data: Array<any> =[];
	localState = { value: '' };
  constructor(public appState: AppState, public player: Player) {

  }
  ngOnInit() {
    console.log('hello `Home` component');
    this.player.getPlayers().subscribe(players => { 
      this.players = players; 
      [].push.apply(this.data, players);
    });
  }
  listClick(event) {
    window.location = "http://localhost:3000/#/player/"+event.currentTarget.id;
    location.reload();
  }
}