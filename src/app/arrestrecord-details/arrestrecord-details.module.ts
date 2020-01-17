import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrestrecordDetailsPageRoutingModule } from './arrestrecord-details-routing.module';

import { ArrestrecordDetailsPage } from './arrestrecord-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArrestrecordDetailsPageRoutingModule
  ],
  declarations: [ArrestrecordDetailsPage]
})
export class ArrestrecordDetailsPageModule {}
