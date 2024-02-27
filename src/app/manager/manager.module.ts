import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { GeneralModule } from '../general/general.module';
import { GestionPersonnelComponent } from './pages/gestion-personnel/gestion-personnel.component';
import { ManagerRoutes } from './manager.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutes,
    GeneralModule
  ],
  declarations: [
    ManagerComponent,
    GestionPersonnelComponent
  ]
})
export class ManagerModule { }
