import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsModuleHomeComponent } from './collections-module-home/collections-module-home.component';

@NgModule({
  declarations: [CollectionsModuleHomeComponent],
  imports: [CommonModule, CollectionsRoutingModule],
  exports: [],
})
export class CollectionsModule {}
