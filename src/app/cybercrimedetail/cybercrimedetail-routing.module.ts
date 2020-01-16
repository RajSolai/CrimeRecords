import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CybercrimedetailPage } from './cybercrimedetail.page';

const routes: Routes = [
  {
    path: '',
    component: CybercrimedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CybercrimedetailPageRoutingModule {}
