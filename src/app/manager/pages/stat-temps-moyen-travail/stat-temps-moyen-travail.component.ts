import { Component, OnInit } from '@angular/core';
import { StatistiquesService } from '../../services/statistiques.service';

@Component({
  selector: 'app-stat-temps-moyen-travail',
  templateUrl: './stat-temps-moyen-travail.component.html',
  styleUrls: ['./stat-temps-moyen-travail.component.css']
})
export class StatTempsMoyenTravailComponent implements OnInit {

  tempsMoyenTravail: any;
  barOptions: any;
  token: string = '';
  statistique: any = [];
  documentStyle = getComputedStyle(document.documentElement);
  skeleton: boolean = true;

  constructor(
    private statistiqueService: StatistiquesService
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token') || '';
    const documentStyle = getComputedStyle(document.documentElement);

    this.getStatistique();
  }


  getStatistique() {
    this.skeleton = true;
    this.statistiqueService.getStatHoraireEmploye(this.token).subscribe(
      (res: any) => {
        this.tempsMoyenTravail = this.convertirDonneesEnHorizontalBarData(res);
        console.log(this.tempsMoyenTravail, 'tempsMoyenTravail');
        this.skeleton = false;
      },
      (error: any) => {
        this.skeleton = false;
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  convertirDonneesEnHorizontalBarData(donnees: any[]): any {
    const labels = donnees.map(entry => entry.username);
    const moyenneData = donnees.map(entry => entry.moyenne);

    return {
      labels: labels,
      datasets: [
        {
          label: 'Temps moyen de travail',
          backgroundColor: this.documentStyle.getPropertyValue('--primary-500'),
          data: moyenneData
        }
      ]
    };
  }

}
