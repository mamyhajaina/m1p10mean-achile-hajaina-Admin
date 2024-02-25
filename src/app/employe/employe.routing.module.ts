import { Routes, RouterModule } from '@angular/router';
import { EmployeComponent } from './employe.component';
import { NgModule } from '@angular/core';
import { GestionRendezVousComponent } from './pages/gestion-rendez-vous/gestion-rendez-vous.component';
import { GestionTachesComponent } from './pages/gestion-taches/gestion-taches.component';
import { ProfilHoraireTravailComponent } from './pages/profil-horaire-travail/profil-horaire-travail.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeComponent,
    children: [
      {
        path: 'gestionRendezVous', // child route path
        component: GestionRendezVousComponent, // child route component that the router renders
      },
      {
        path: 'gestionTache', // child route path
        component: GestionTachesComponent, // child route component that the router renders
      },
      {
        path: 'profileHoraire', // child route path
        component: ProfilHoraireTravailComponent, // child route component that the router renders
      },
      {
        path: '',
        redirectTo: 'gestionRendezVous',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'gestionRendezVous', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutes { }
