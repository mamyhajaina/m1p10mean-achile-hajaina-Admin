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
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';
import { ConfirmationService } from 'primeng/api';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SkeletonTabComponent } from './components/skeleton-tab/skeleton-tab.component';
import { SkeletonModule } from 'primeng/skeleton';
import { AccordionModule } from 'primeng/accordion';
import { ChipModule } from 'primeng/chip';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  declarations: [
    EmployeComponent,
    ProfilHoraireTravailComponent,
    GestionTachesComponent,
    GestionRendezVousComponent,
    HoraireTravailComponent,
    SkeletonTabComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutes,
    TabViewModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    FormsModule,
    GeneralModule,
    TableModule,
    RatingModule,
    ButtonModule,
    SliderModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    NgxSpinnerModule,
    SkeletonModule,
    AccordionModule,
    ChipModule,
    TimelineModule
  ],
  providers: [
    ConfirmationService,
    CustomerService,
    ProductService
  ]
})
export class EmployeModule { }
