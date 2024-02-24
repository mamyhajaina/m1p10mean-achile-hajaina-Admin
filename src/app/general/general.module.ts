import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general.component';
import { GeneralRoutes } from './general.routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { GalleriaModule } from 'primeng/galleria';
import { DragDropModule } from 'primeng/dragdrop';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { MessageService } from 'primeng/api';
import { HeureService } from './models/heure.service';
import { CarouselModule } from 'primeng/carousel';
import { MessagesModule } from 'primeng/messages';
import { MenuComponent } from './components/menu/menu.component';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ConfigComponent } from './config/config.component';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  imports: [
    ToastModule,
    CommonModule,
    GeneralRoutes,
    FormsModule,
    ConfirmPopupModule,
    ButtonModule,
    ImageModule,
    MenuModule,
    DialogModule,
    RatingModule,
    CalendarModule,
    CheckboxModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    DividerModule,
    GalleriaModule,
    DragDropModule,
    TagModule,
    TableModule,
    PaginatorModule,
    CarouselModule,
    MessagesModule,
    SidebarModule
  ],
  declarations: [
    GeneralComponent,
    FooterComponent,
    MenuComponent,
    SideBarComponent,
    TopBarComponent,
    ConfigComponent,
    MenuItemComponent
  ],
  exports: [
    FooterComponent,
    MenuComponent,
    SideBarComponent,
    TopBarComponent,
    ConfigComponent,
    MenuItemComponent
  ],
  providers: [MessageService, HeureService],
})
export class GeneralModule { }
