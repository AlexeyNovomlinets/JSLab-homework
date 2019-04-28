import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsServicesModule } from './items-services.module';
import { ItemDetailComponent, ItemListComponent, ItemComponent } from './components';

import { BorderDirective } from './directives/border.directive';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    ItemsServicesModule,
    ItemsRoutingModule
  ],
  declarations: [
    ItemListComponent,
    ItemComponent,
    ItemDetailComponent,

    BorderDirective,
    FilterPipe
  ]
})
export class ItemsModule { }
