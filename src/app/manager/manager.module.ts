import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { GeneralModule } from '../general/general.module';
import { GestionPersonnelComponent } from './pages/gestion-personnel/gestion-personnel.component';
import { ManagerRoutes } from './manager.routing.module';
import { GestionServicesComponent } from './pages/gestion-services/gestion-services.component';
import { StatNombreReservationComponent } from './pages/stat-nombre-reservation/stat-nombre-reservation.component';
import { StatTempsMoyenTravailComponent } from './pages/stat-temps-moyen-travail/stat-temps-moyen-travail.component';
import { StatChifreAffaireComponent } from './pages/stat-chifre-affaire/stat-chifre-affaire.component';
import { StatBeneficeComponent } from './pages/stat-benefice/stat-benefice.component';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutes,
    GeneralModule
  ],
  declarations: [
    ManagerComponent,
    GestionPersonnelComponent,
    GestionServicesComponent,
    StatNombreReservationComponent,
    StatTempsMoyenTravailComponent,
    StatChifreAffaireComponent,
    StatBeneficeComponent
  ]
})
export class ManagerModule { }
