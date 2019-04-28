import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDetailComponent, ItemListComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    component: ItemListComponent
  },
  {
    path: 'item/:itemID',
    component: ItemDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
