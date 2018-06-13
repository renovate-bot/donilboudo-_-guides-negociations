import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GuideDetailsPage } from '../guide-details/details';

@Component({
  selector: 'page-guides',
  templateUrl: 'guides.html'
})
export class GuidesPage {

  constructor(public navCtrl: NavController) {

  }

  chooseGuide (name) {
    this.navCtrl.push(GuideDetailsPage, {
      data: name
    });
  }

}
