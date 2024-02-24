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

  @Input() typeMenu?: string = 'manager';
  menu: MenuItem[] = [];
  isMenuOpen = false;
  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    let data = {};
    const menuEmployeur = {
      label: 'Employeur',
      items: [
        { label: 'Employeur', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
      ]
    };

    const menuManager = {
      label: 'Manager',
      items: [
        { label: 'Manager', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
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
    console.log('model', this.model);

  }
}
