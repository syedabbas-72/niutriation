import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { INTRO_KEY } from 'src/app/guards/profile-details.guard';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage implements OnInit {

  @ViewChild(IonSlides)slides: IonSlides;
  @ViewChild('slides', { static: true }) slider: IonSlides;  
  segment = 0;  
  constructor(private router: Router) { }
  
 
  ngOnInit() {
  }
 
  next() {
    this.slides.slideNext();
  }
 
  async start() {
  await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/tabs', { replaceUrl:true });
  }


  async segmentChanged(ev: any) {  
    await this.slider.slideTo(this.segment);  
  }  
  async slideChanged() {  
    this.segment = await this.slider.getActiveIndex();  
  }  
}
