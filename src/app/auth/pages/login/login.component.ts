import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from '../../model/model';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { LayoutService } from 'src/app/general/service/app.layout.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {
  user: User = new User();
  username: string = '';
  token: any;
  checkToken: boolean = false;
  disabledlogin: boolean = false;
  sessionTimeout: any;
  url: any;
  valCheck: string[] = ['remember'];
  password!: string;
  msgs: Message[] = [];

  constructor(
    private messageService: MessageService,
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    public layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.url = sessionStorage.getItem('url');
    this.checkSessionTimeout();
  }

  startSessionTimeout() {
    clearTimeout(this.sessionTimeout);
    this.sessionTimeout = setTimeout(() => {
      this.logout();
    }, 3600000);
  }

  checkSessionTimeout() {
    const lastActivityTime = localStorage.getItem('lastActivityTime');
    if (lastActivityTime) {
      const elapsedTime = new Date().getTime() - parseInt(lastActivityTime);
      if (elapsedTime >= 3600000) {
        this.logout();
      } else {
        this.startSessionTimeout();
      }
    }
  }

  registerUser() {
    this.spinner.show('register');
    this.authService.register(this.user).subscribe(
      () => {
        this.checkToken = false;
        this.user = new User();
        this.messageService.add({
          key: 'tc',
          severity: 'success',
          summary: 'Success',
          detail: 'User enregistrer avec succèes',
        });
        this.spinner.hide('register');
      },
      (error: any) => {
        this.messageService.add({
          key: 'tc',
          severity: 'error',
          summary: 'Error',
          detail: `Une produit s'est produite, veuillez ressayer ou changer le username`,
        });
        this.spinner.hide('register');
        console.error(error);
      }
    );
  }

  login() {
    // this.spinner.show('login');
    this.disabledlogin = true;
    this.authService.login(this.username, this.password).subscribe(
      (res: any) => {
        if (res) {
          const {
            token,
            username,
            _id,
            role,
            email,
            adresse,
            phone,
            pays,
            emplois,
            salaire,
            image,
          } = res;
          localStorage.setItem('token', token);
          localStorage.setItem('user', username);
          localStorage.setItem('id', _id);
          localStorage.setItem('role', role);
          localStorage.setItem('email', email);
          localStorage.setItem('pays', pays);
          localStorage.setItem('adresse', adresse);
          localStorage.setItem('phone', phone);
          localStorage.setItem('emplois', JSON.stringify(emplois));
          localStorage.setItem('salaire', JSON.stringify(salaire));
          localStorage.setItem('image', image);
          this.startSessionTimeout();
          this.updateLastActivityTime();
          this.navigateHome(role);
          this.disabledlogin = false;
          // this.spinner.hide('login');
        }
      },
      (error: any) => {
        // this.spinner.hide('login');
        this.disabledlogin = false;
        this.checkToken = true;
        this.showErrorViaMessages();
        console.error(error);
      }
    );
  }

  navigateHome(role: string) {
    if (role === 'Emploie') {
      this.router.navigate(['/employe']);
    } else if (role === 'Manager') {
      this.router.navigate(['/manager']);
    }
  }

  logout() {
    this.authService.logout(this.token).subscribe((message) => {
      clearTimeout(this.sessionTimeout);
      this.ngOnInit();
    });
  }

  changePassword() { }

  updateLastActivityTime() {
    localStorage.setItem('lastActivityTime', new Date().getTime().toString());
  }

  showErrorViaMessages() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
  }
}
