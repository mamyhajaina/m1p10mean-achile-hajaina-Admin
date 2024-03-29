import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProfileHoraireTravailService } from '../../services/ProfileHoraireTravail.service';
import { User } from '../../models/User';
import * as moment from 'moment';
import { PrimeIcons } from 'primeng/api';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profil-horaire-travail',
  templateUrl: './profil-horaire-travail.component.html',
  styleUrls: ['./profil-horaire-travail.component.css'],
})
export class ProfilHoraireTravailComponent implements OnInit {
  profile: User = new User();
  solde: any;
  idUser: any;
  environments = environment;
  token: string = '';

  constructor(
    private profilHoraireTravailService: ProfileHoraireTravailService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.idUser = localStorage.getItem('id');
    const emploisString = localStorage.getItem('emplois');
    const salaireString = localStorage.getItem('salaire');

    const emplois = emploisString ? JSON.parse(emploisString) : null;
    const salaire = salaireString ? JSON.parse(salaireString) : null;

    this.profile.idUser = localStorage.getItem('id') || '';
    this.profile.username = localStorage.getItem('user') || '';
    this.profile.email = localStorage.getItem('email') || '';
    this.profile.pays = localStorage.getItem('pays') || '';
    this.profile.adresse = localStorage.getItem('adresse') || '';
    this.profile.emplois = emplois || '';
    this.profile.salaire = salaire || '';
    this.profile.phone = localStorage.getItem('phone') || '';
    this.profile.image = localStorage.getItem('image') || '';
    this.token = localStorage.getItem('token') || '';
    this.getSolde();
  }

  getSolde() {
    this.profilHoraireTravailService.getSolde(this.profile.idUser, this.token).subscribe(
      (res: any) => {
        this.profile.solde = res;
      },
      (error: any) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  private transformToJson(inputJson: any): any[] {
    let arrResult = [];
    for (let item of inputJson) {
      const dateTimeDebut = this.convertStringToDate(item.dateTimeDebut);
      const dateTimeFin = this.convertStringToDate(item.dateTimeFin);
      let result = { status: this.formatDate(dateTimeDebut, 'EEEE MM YYYY'), date: this.formatDate(dateTimeDebut, 'HH:mm') + ' au ' + this.formatDate(dateTimeFin, 'HH:mm'), icon: '', color: '#9698f5', image: 'game-controller.jpg' };
      arrResult.push(result);
    }
    return arrResult;
  }

  convertStringToDate(dateString: string): Date {
    return new Date(dateString);
  }

  formatDate(date: Date, format: string): string {
    return this.datePipe.transform(date, format);
  }
}
