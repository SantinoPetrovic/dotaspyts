import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class Media { 
    /*private playersUrl = 'player/creator';*/
    constructor (public http: Http) {}
/*    ngOnInit() {
        this.getPlayers();
    }*/
/*    getPlayers (): Observable<Player[]> {
        return this.http.get(this.playersUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }*/

/*    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }*/
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
}