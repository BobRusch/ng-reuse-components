import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionsModuleHomeComponent } from './collections-module-home/collections-module-home.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsModuleHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
