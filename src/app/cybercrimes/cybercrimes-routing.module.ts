import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CybercrimesPage } from './cybercrimes.page';

const routes: Routes = [
  {
    path: '',
    component: CybercrimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CybercrimesPageRoutingModule {}
