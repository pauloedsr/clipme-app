import { TimelineModel, ViewTimeline } from './../../types/clipme.type';
import { ClipmeServiceProvider } from './../../providers/clipme-service/clipme-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  public timeline: TimelineModel;
  public viewTimeline: ViewTimeline;

  public newClip: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private clipmeService: ClipmeServiceProvider) {
    this.timeline = navParams.get('timeline');
  }

  ionViewDidLoad() {
    this.loadTimeline();
  }

  private loadTimeline(){
    this.clipmeService.timelineView(this.timeline._id).subscribe(data => {
      this.viewTimeline = data;
      console.log('clips', this.viewTimeline);
    })
  }

  decodeClip(clip: string){
    try {
      //return decodeURIComponent(encodeURIComponent(atob(clip)));
      return (clip);
    } catch (error) {
      console.log('clip', clip);
      return 'failed';
    }
  }

  clipme() {
    if(this.newClip != null) {
      this.clipmeService.clipme(this.newClip, this.timeline._id).subscribe(data => {
        console.log(data);
        this.loadTimeline();
        this.newClip = null;
      }, error => {
        console.log(error);
      })
    }
  }

}
