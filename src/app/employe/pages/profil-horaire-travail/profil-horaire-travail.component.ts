import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProfileHoraireTravailService } from '../../services/ProfileHoraireTravail.service';
import { User } from '../../models/User';
import { HoraireTravail } from '../../models/HoraireTravail';
import { PrimeIcons } from 'primeng/api';

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
  horaireTravail: any[] = [];

  constructor(
    private profilHoraireTravailService: ProfileHoraireTravailService
  ) { }

  ngOnInit() {
    this.horaireTravail = [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: '', color: '#9698f5', image: 'game-controller.jpg' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: '', color: '#9698f5' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#22c55e' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: '', color: '#67c589' }
    ];
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
    this.getSolde();
  }

  getSolde() {
    this.profilHoraireTravailService.getSolde(this.profile.idUser).subscribe(
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
}
