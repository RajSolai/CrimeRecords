import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CybercrimedetailPageRoutingModule } from './cybercrimedetail-routing.module';

import { CybercrimedetailPage } from './cybercrimedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CybercrimedetailPageRoutingModule
  ],
  declarations: [CybercrimedetailPage]
})
export class CybercrimedetailPageModule {}
