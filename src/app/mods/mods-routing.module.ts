import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModsModuleHomeComponent } from './mods-module-home/mods-module-home.component';

const routes: Routes = [
  {
    path: '',
    component: ModsModuleHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModsRoutingModule {}
