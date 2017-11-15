import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroModel } from '../../models/heromodel';
import { Armor } from '../../models/armor';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home'
/**
 * Generated class for the VillagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-village',
  templateUrl: 'village.html',
})
export class VillagePage {
  hero = {} as HeroModel;
  // hero: HeroModel;
  // helmet = new Armor('hat of doom','head',14,5,5);
  list: any;

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
      this.hero = JSON.parse(localStorage.getItem('hero'));
    // this.list = [{ head: this.helmet },{head: this.helmet}]
  }

  getName() {
    // this.hero.fullHeal()
    // this.hero.head = this.list;
    // this.hero.armor.push(this.helmet);
    localStorage.setItem('hero', JSON.stringify(this.hero) );
    console.log(this.hero)
  }

  restart() {
    let confirm = this.alertCtrl.create({
    title: 'Giving up?',
    message: 'Restarting the game will permenently remove all previous game data.',
    buttons: [{
      text: 'Cancel',
      handler: () => { // console.log('Disagree clicked')
        }},
        {
          text: 'Restart',
          handler: () => {
            localStorage.removeItem('hero');
            this.navCtrl.setRoot(HomePage);
            }}]});
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VillagePage');
  }

}
