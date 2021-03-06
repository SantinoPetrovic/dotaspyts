import { Injectable } from '@angular/core';
import {Pipe, PipeTransform} from "@angular/core";

@Pipe ({
	name: "filter",
	pure: false
})

@Injectable()

export class PlayerFilterPipe implements PipeTransform {
    transform(value, productID) {
        // filter items array, items which match and return true will be kept, false will be filtered out
        return value.filter(player => player.id == productID);
        return value.filter(wiki => wiki.id == productID);
        return value.filter(match => match.id == productID);
        return value.filter(redditNewsData => redditNewsData.id == productID);
        return value.filter(gosugamersnews => gosugamersnews.id == productID);
        return value.filter(tournament => tournament.id == productID);
    }
}