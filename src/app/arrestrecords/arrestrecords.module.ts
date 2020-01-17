import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrestrecordsPageRoutingModule } from './arrestrecords-routing.module';

import { ArrestrecordsPage } from './arrestrecords.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArrestrecordsPageRoutingModule
  ],
  declarations: [ArrestrecordsPage]
})
export class ArrestrecordsPageModule {}
