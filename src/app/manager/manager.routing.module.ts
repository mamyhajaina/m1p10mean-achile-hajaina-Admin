import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { GestionPersonnelComponent } from './pages/gestion-personnel/gestion-personnel.component';
import { GestionServicesComponent } from './pages/gestion-services/gestion-services.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';

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
        path: 'statistique', // child route path
        component: StatistiqueComponent, // child route component that the router renders
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

export const ManagerRoutes = RouterModule.forChild(routes);
