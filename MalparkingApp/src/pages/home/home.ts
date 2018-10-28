import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { VideoPlayer } from '@ionic-native/video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(
    public navCtrl: NavController //,
    //public videoPlayer: VideoPlayer
    ) {


  }
/*
  public playVideo(){
    //this.videoOpts = {volume : 1.0};
    this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });    
  }
  public stopPlayingVideo(){
      this.videoPlayer.close();
  }*/ 


}
