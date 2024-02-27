import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../service/app.layout.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  menuItems: MenuItem[] = [];
  token: any;
  environments: any;

  constructor(
    public layoutService: LayoutService,
    private authService: AuthService,
    public router: Router
  ) { }
  ngOnInit(): void {
    this.environments = environment;
    this.token = localStorage.getItem('token');
    this.menuItems = [
      {
        separator: true
      },
      {
        label: 'Se deconnecter', icon: 'pi pi-power-off',
        command: () => this.logout()
      },
    ];
  }

  logout() {
    this.authService.logout(this.token).subscribe((message) => {
      this.router.navigate(['/auth']);
    });
  }


}
