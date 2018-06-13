import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-guide-details',
  templateUrl: 'details.html'
})
export class GuideDetailsPage {
  title: string;
  guideName: string;
  imagePath: string;
  negoLanguage: boolean;
  resumeLanguage: boolean;
  rateDocument1: number;
  rateDocument2: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public toastCtrl: ToastController, private alertCtrl: AlertController) {
    
                this.guideName = navParams.get('data');
    this.title = this.guideName.toUpperCase();
  }

  showNegoDocument() {
    if (!this.negoLanguage)
    {
      this.showToast('bottom');
    }
    else
    {
      this.presentAlert('', "En construction");
    }
  }

  showResumeDocument() {
    if (!this.resumeLanguage)
    {
      this.showToast('bottom');
    }
    else
    {
      this.presentAlert('', "En construction");
    }
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Veuillier choisir la langue',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  onRateDocument() {
   this.presentAlert('Evaluation', "Merci pour l'évaluation");
  }

  presentAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Ok']
    });
    alert.present();
  }
}
