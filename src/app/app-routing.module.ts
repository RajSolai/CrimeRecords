import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'womencrimes',
    loadChildren: () => import('./womencrimes/womencrimes.module').then( m => m.WomencrimesPageModule)
  },
  {
    path: 'cybercrimes',
    loadChildren: () => import('./cybercrimes/cybercrimes.module').then( m => m.CybercrimesPageModule)
  },
  {
    path: 'cybercrimedetail',
    loadChildren: () => import('./cybercrimedetail/cybercrimedetail.module').then( m => m.CybercrimedetailPageModule)
  },
  {
    path: 'arrestrecords',
    loadChildren: () => import('./arrestrecords/arrestrecords.module').then( m => m.ArrestrecordsPageModule)
  },
  {
    path: 'arrestrecord-details',
    loadChildren: () => import('./arrestrecord-details/arrestrecord-details.module').then( m => m.ArrestrecordDetailsPageModule)
  },
  {
    path: 'stats',
    loadChildren: () => import('./stats/stats.module').then( m => m.StatsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
