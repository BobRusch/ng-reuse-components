import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewsModuleHomeComponent } from './views-module-home/views-module-home.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsModuleHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
