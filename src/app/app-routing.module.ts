import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'employe',
        pathMatch: 'full',
    },
    {
        path: 'employe',
        loadChildren: () =>
            import('./employe/employe.module').then(
                (m) => m.EmployeModule
            ),
    },
    {
        path: 'manager',
        loadChildren: () =>
            import('./manager/manager.module').then(
                (m) => m.ManagerModule
            ),
    },
    {
        path: '**',
        redirectTo: 'employe',
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
