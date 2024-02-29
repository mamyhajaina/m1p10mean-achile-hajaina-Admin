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
import { ChartModule } from 'primeng/chart';
import { InputMaskModule } from 'primeng/inputmask';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { ChipModule } from "primeng/chip";
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { RatingModule } from 'primeng/rating';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SliderModule } from 'primeng/slider';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { TimelineModule } from 'primeng/timeline';
import { EmployeModule } from '../employe/employe.module';
import { SkeletonModule } from 'primeng/skeleton';
import { AjoutServiceComponent } from './components/ajout-service/ajout-service.component';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutes,
    GeneralModule,
    InputMaskModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputNumberModule,
    ColorPickerModule,
    CascadeSelectModule,
    MultiSelectModule,
    ToggleButtonModule,
    SliderModule,
    InputTextareaModule,
    RadioButtonModule,
    InputTextModule,
    RatingModule,
    ChipModule,
    KnobModule,
    InputSwitchModule,
    ListboxModule,
    SelectButtonModule,
    CheckboxModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    ChartModule,
    FormsModule,
    TableModule,
    ToastModule,
    TableModule,
    FileUploadModule,
    RippleModule,
    ToolbarModule,
    DialogModule,
    TimelineModule,
    EmployeModule,
    SkeletonModule
  ],
  declarations: [
    ManagerComponent,
    GestionPersonnelComponent,
    GestionServicesComponent,
    StatNombreReservationComponent,
    StatTempsMoyenTravailComponent,
    StatChifreAffaireComponent,
    StatBeneficeComponent,
    AjoutServiceComponent
  ]
})
export class ManagerModule { }
