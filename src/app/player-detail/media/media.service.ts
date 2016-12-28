import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

// Media will hold all functions that makes get call to json files.
export class Media { 
    constructor (public http: Http) {}

    getPlayers() {
    return this.http.get('./data/json/players/players.json')
            .map(res => res.json());
    }

    getWiki() {
    return this.http.get('./data/json/wiki/teamliquid.json')
            .map(res => res.json());
    }

    getMatches() {
    return this.http.get('./data/json/matches/dotaMatches.json')
            .map(res => res.json());
    }

    getRedditNews() {
    return this.http.get('./data/json/reddit/redditNews.json')
            .map(res => res.json());
    }

    getGosugamersNews() {
    return this.http.get('./data/json/gosugamers/gosugamersNews.json')
            .map(res => res.json());
    }

    getTournaments() {
    return this.http.get('./data/json/tournaments/tournaments.json')
            .map(res => res.json());
    }
}