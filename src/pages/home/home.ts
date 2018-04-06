import { ClipmeServiceProvider } from './../../providers/clipme-service/clipme-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimelineModel } from '../../types/clipme.type';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  timelines: any;

  constructor(public navCtrl: NavController, private clipmeService: ClipmeServiceProvider) {

  }

  ionViewDidLoad(){
    this.clipmeService.timelineList(localStorage.getItem('autor')).subscribe((data) => {
      this.timelines = data;
      console.log(data);
    }, error => console.log(error));
  }

}
