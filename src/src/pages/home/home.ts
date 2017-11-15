import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VillagePage } from '../village/village'
import { HeroModel } from '../../models/heromodel';
// declare const electron
// declare const path

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hero = new HeroModel()

  constructor(public navCtrl: NavController) {
    if (localStorage.getItem('hero')) {
      this.navCtrl.setRoot(VillagePage);
    } 
  }

  goVillage() {
    localStorage.setItem('hero', JSON.stringify(this.hero) );
    this.navCtrl.setRoot(VillagePage);
  }

}
