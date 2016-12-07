import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';
import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from './player';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title,
    Player
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ '../../styles/list-fluid-design.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public data: Array<any> =[];
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title, public player: Player) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    this.player.getPlayers().subscribe(players => { this.players = players; [].push.apply(this.data, players); });
    console.log(this.data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
