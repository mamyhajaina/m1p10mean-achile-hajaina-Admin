import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { GestionPersonnelComponent } from './pages/gestion-personnel/gestion-personnel.component';
import { GestionServicesComponent } from './pages/gestion-services/gestion-services.component';
import { NgModule } from '@angular/core';
import { StatTempsMoyenTravailComponent } from './pages/stat-temps-moyen-travail/stat-temps-moyen-travail.component';
import { StatBeneficeComponent } from './pages/stat-benefice/stat-benefice.component';
import { StatNombreReservationComponent } from './pages/stat-nombre-reservation/stat-nombre-reservation.component';
import { StatChifreAffaireComponent } from './pages/stat-chifre-affaire/stat-chifre-affaire.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: 'gestionPersonnel', // child route path
        component: GestionPersonnelComponent, // child route component that the router renders
      },
      {
        path: 'gestionServices', // child route path
        component: GestionServicesComponent, // child route component that the router renders
      },
      {
        path: 'Statistiques/TempsMoyenTravail', // child route path
        component: StatTempsMoyenTravailComponent, // child route component that the router renders
      },
      {
        path: 'Statistiques/Benefice', // child route path
        component: StatBeneficeComponent, // child route component that the router renders
      },
      {
        path: 'Statistiques/NbReservation', // child route path
        component: StatNombreReservationComponent, // child route component that the router renders
      },
      {
        path: 'Statistiques/ChiffreAffaire', // child route path
        component: StatChifreAffaireComponent, // child route component that the router renders
      },
      {
        path: '',
        redirectTo: 'gestionPersonnel',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'gestionPersonnel', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutes { }
