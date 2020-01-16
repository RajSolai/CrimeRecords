import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomencrimesPage } from './womencrimes.page';

const routes: Routes = [
  {
    path: '',
    component: WomencrimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomencrimesPageRoutingModule {}
