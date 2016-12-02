import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app.service';
import { List } from './list';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`PlayerCreator` component loaded asynchronously');

@Component({
  selector: 'playerCreator',
  providers: [
    List
  ],
  styleUrls: ['../../styles/list-fluid-design.css'],
  templateUrl: './playerCreator.html'
})
export class PlayerCreatorComponent {
  localState = { value: '' };
  constructor(public appState: AppState, public list: List ) {}
  ngOnInit() {
    console.log('hello `Home` component');
    this.list.getPlayers().subscribe(players => this.players = players);

  }

/*  ngOnInit() { this.getPlayers(); }

  getPlayers() {
    this.playerCreatorService.getPlayers()
                     .subscribe(
                       players => this.players = players,
                       error =>  this.errorMessage = <any>error);
  }
  addPlayer (name: string) {
    if (!name) { return; }
    this.playerCreatorService.addPlayer(name)
                     .subscribe(
                       player  => this.players.push(player),
                       error =>  this.errorMessage = <any>error);
  } */ 
}
 