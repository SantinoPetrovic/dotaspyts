import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app.service';
import { Media } from './media';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

console.log('`PlayerDetail`');

@Component({
  selector: 'playerDetail',
  providers: [
    Media
  ],
  styleUrls: ['../../styles/fluid-design.css'],
  templateUrl: './playerDetail.html'
})
export class PlayerDetailComponent {
  localState = { value: '' };
  productID: string;
  constructor(public appState: AppState, public media: Media, public route: ActivatedRoute) {
    this.productID = route.snapshot.params['id'];
    console.log(this.productID);
  }
  ngOnInit() {
    console.log('hello `Detail` component');
    this.media.getPlayers().subscribe(players => this.players = players);
  }
  ngAfterViewInit () {
          !function(d,s,id){
              var js: any,
                  fjs=d.getElementsByTagName(s)[0],
                  p='https';
              if(!d.getElementById(id)){
                  js=d.createElement(s);
                  js.id=id;
                  js.src=p+"://platform.twitter.com/widgets.js";
                  fjs.parentNode.insertBefore(js,fjs);
              }
          }
          (document,"script","twitter-wjs");

          !function(d,s,id){
              var js: any,
                  fjs=d.getElementsByTagName(s)[0],
                  p='https';
              if(!d.getElementById(id)){
                  js=d.createElement(s);
                  js.id=id;
                  js.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=906008279464404";
                  fjs.parentNode.insertBefore(js,fjs);
              }
          }
          (document,"script","facebook-jssdk");

  }
}
 