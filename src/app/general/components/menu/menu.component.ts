import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';
import { MenuItem } from 'primeng/api';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() typeMenu?: string = '';
  menu: MenuItem[] = [];
  isMenuOpen = false;
  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    let data = {};
    const menuEmployeur = {
      label: 'Employeur',
      items: [
        { label: 'Gestion Rendez Vous', icon: 'pi pi-calendar', routerLink: ['/employe/gestionRendezVous'] },
        { label: 'Gestion des Tâches', icon: 'pi pi-tags', routerLink: ['/employe/gestionTache'] },
        { label: 'Profil et Horaire de travail', icon: 'pi pi-clock', routerLink: ['/employe/profileHoraire'] }
      ]
    };

    const menuManager = {
      label: 'Manager',
      items: [
        { label: 'Gestion Personnel', icon: 'pi pi-fw pi-user-edit', routerLink: ['/manager/gestionPersonnel'] },
        { label: 'Gestion des services', icon: 'pi pi-fw pi-verified', routerLink: ['/manager/gestionServices'] },
        {
          label: 'Statistiques',
          icon: 'pi pi-fw pi-chart-bar',
          items: [
            {
              label: 'Temps moyen de travail',
              icon: 'pi pi-fw pi-calendar-times',
              routerLink: ['/manager/Statistiques/TempsMoyenTravail']
            },
            {
              label: 'Nombre de réservation',
              icon: 'pi pi-fw pi-ticket',
              routerLink: ['/manager/Statistiques/NbReservation']
            },
            {
              label: 'Chiffre d’affaires',
              icon: 'pi pi-fw pi-money-bill',
              routerLink: ['/manager/Statistiques/ChiffreAffaire']
            },
            {
              label: 'Bénéfice par mois',
              icon: 'pi pi-fw pi-dollar',
              routerLink: ['/manager/Statistiques/Benefice']
            }
          ]
        }
      ]
    };

    if (this.typeMenu == 'employe') {
      data = menuEmployeur;
    } else if (this.typeMenu == 'manager') {
      data = menuManager;
    }

    this.model = [
      data
    ];

  }
}
