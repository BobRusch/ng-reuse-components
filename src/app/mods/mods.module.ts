import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsModuleHomeComponent } from './mods-module-home/mods-module-home.component';

@NgModule({
  declarations: [ModsModuleHomeComponent],
  imports: [CommonModule, ModsRoutingModule],
  exports: [],
})
export class ModsModule {}
