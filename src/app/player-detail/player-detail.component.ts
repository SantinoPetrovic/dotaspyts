import { Component, Input } from '@angular/core';
import { AppState } from '../app.service';
import { Media } from './media';
import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'playerDetail',
  providers: [
    Media
  ],
  styleUrls: ['../../styles/fluid-design.css'],
  templateUrl: './playerDetail.html'
})
export class PlayerDetailComponent {
  public data: Array<any> =[];
  public wikiData: Array<any> =[];
  public matchesData: Array<any> =[];
  public redditNewsData: Array<any> =[];
  public gosugamersNewsData: Array<any> =[];
  localState = { value: '' };
  productID: string;
  trustedDashboardUrl : SafeUrl;
  constructor(public appState: AppState, public media: Media, public route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.productID = route.snapshot.params['id'];
  }
  ngOnInit() {
    console.log('hello `Detail` component');
/*    this.media.getPlayers().subscribe(players => this.players = players);*/
    this.media.getPlayers().subscribe(players => { 
      this.players = players; 
      [].push.apply(this.data, players);
      for (var i in this.data) {
      var obj = this.data[i]["id"];
      if(this.productID == obj) {
        var twitchChatData = "https://www.twitch.tv/"+this.data[i]["twitch_id"]+"/chat?popout=";
        var twitchVideoData = "https://player.twitch.tv/?channel="+this.data[i]["twitch_id"];
        this.facebookTimelineUrl = "https://www.facebook.com/"+this.data[i]["facebook_id"];
        this.twitchChatUrl = this.sanitizer.bypassSecurityTrustResourceUrl(twitchChatData);
        this.twitchVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(twitchVideoData);
      }
      // ...
      }
    });

    this.media.getWiki().subscribe(wikis => { 
      this.wikis = wikis; 
      [].push.apply(this.wikiData, wikis);
    });

    this.media.getMatches().subscribe(matches => { 
      this.matches = matches; 
      [].push.apply(this.matchesData, matches);
    });
    this.media.getRedditNews().subscribe(redditnews => { 
      this.redditnews = redditnews; 
      [].push.apply(this.redditNewsData, redditnews);
    });
    this.media.getGosugamersNews().subscribe(gosugamersnews => { 
      this.gosugamersnews = gosugamersnews; 
      [].push.apply(this.gosugamersNewsData, gosugamersnews);
    });
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
 