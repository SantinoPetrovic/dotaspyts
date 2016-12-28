import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';
import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
class PlayerModel {
  constructor(public nickname: string) {}  
}
@Component({
  selector: 'home',
  providers: [
    Title
  ],
  styleUrls: [ '../../styles/list-fluid-design.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public data: Array<any> =[];
  localState = { value: '' };
  PlayerModels = [
    new PlayerModel('sleep')
  ]
  constructor(public appState: AppState, public title: Title) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
