import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerListService } from './player-list.service';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`PlayerList` component loaded asynchronously');

@Component({
  selector: 'playerList',
  styles: [`
  `],
  templateUrl: './playerList.html'
})
export class PlayerListComponent {
  localState: any;
  constructor(public route: ActivatedRoute) {
  }
}
