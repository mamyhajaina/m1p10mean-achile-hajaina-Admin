import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
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
        path: 'auth',
        loadChildren: () =>
            import('./auth/auth.module').then(
                (m) => m.AuthModule
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
        redirectTo: 'auth',
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
