import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { ManagerRoutes } from './manager.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutes
  ],
  declarations: [
    ManagerComponent
  ]
})
export class ManagerModule { }
