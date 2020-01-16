import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CybercrimesPageRoutingModule } from './cybercrimes-routing.module';

import { CybercrimesPage } from './cybercrimes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CybercrimesPageRoutingModule
  ],
  declarations: [CybercrimesPage]
})
export class CybercrimesPageModule {}
