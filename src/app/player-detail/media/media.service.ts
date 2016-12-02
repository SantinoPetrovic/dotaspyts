import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class Media { 
    constructor (public http: Http) {}

    getPlayers() {
    return this.http.get('./data/json/players/players.json')
            .map(res => res.json());
    }
}