import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeComponent } from './employe.component';
import { EmployeRoutes } from './employe.routing.module';
import { TabViewModule } from 'primeng/tabview';
import { ProfilHoraireTravailComponent } from './pages/profil-horaire-travail/profil-horaire-travail.component';
import { GestionTachesComponent } from './pages/gestion-taches/gestion-taches.component';
import { GestionRendezVousComponent } from './pages/gestion-rendez-vous/gestion-rendez-vous.component';
import { HoraireTravailComponent } from './components/horaire-travail/horaire-travail.component';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { GeneralModule } from '../general/general.module';

@NgModule({
  declarations: [
    EmployeComponent,
    ProfilHoraireTravailComponent,
    GestionTachesComponent,
    GestionRendezVousComponent,
    HoraireTravailComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutes,
    TabViewModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    FormsModule,
    GeneralModule
  ]
})
export class EmployeModule { }
