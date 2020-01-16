import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WomencrimesPageRoutingModule } from './womencrimes-routing.module';

import { WomencrimesPage } from './womencrimes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WomencrimesPageRoutingModule
  ],
  declarations: [WomencrimesPage]
})
export class WomencrimesPageModule {}
