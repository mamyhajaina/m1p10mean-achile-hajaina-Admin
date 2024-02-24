import { Component, OnInit } from '@angular/core';
import { ProfileHoraireTravailService } from '../../services/ProfileHoraireTravail.service';
import { HoraireTravail } from '../../models/HoraireTravail';

@Component({
  selector: 'app-horaire-travail',
  templateUrl: './horaire-travail.component.html',
  styleUrls: ['./horaire-travail.component.css'],
})
export class HoraireTravailComponent implements OnInit {
  horaireTravail: HoraireTravail[] = [];
  idUser = localStorage.getItem('id') || '';

  constructor(
    private profilHoraireTravailService: ProfileHoraireTravailService
  ) {}

  ngOnInit() {
    this.getHoraireTravail();
  }

  getHoraireTravail() {
    this.profilHoraireTravailService.getHoraireTravail(this.idUser).subscribe(
      (res: any) => {
        this.horaireTravail = res;
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
