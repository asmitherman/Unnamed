import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VillagePage } from './village';

@NgModule({
  declarations: [
    VillagePage,
  ],
  imports: [
    IonicPageModule.forChild(VillagePage),
  ],
})
export class VillagePageModule {}
