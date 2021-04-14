import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsModuleHomeComponent } from './views-module-home/views-module-home.component';

@NgModule({
  declarations: [ViewsModuleHomeComponent],
  imports: [CommonModule, ViewsRoutingModule],
  exports: [],
})
export class ViewsModule {}
