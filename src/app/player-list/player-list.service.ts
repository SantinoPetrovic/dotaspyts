import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()

export class PlayerListService { 
  constructor(private http:Http) {}

    getPlayers() {
    	return this.http.get('../../../data/json/players/players.json')
                .map((response : Response) => <playerList[]>response.json().data);
                .catch(this.handleError);
    }

    handleError(error: Response) {
    	console.error(error);
    	return Observable.throw(error.json().error || 'Server error');
    }
}