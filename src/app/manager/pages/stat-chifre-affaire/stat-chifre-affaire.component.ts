import { Component, OnInit } from '@angular/core';
import { StatistiquesService } from '../../services/statistiques.service';

@Component({
  selector: 'app-stat-chifre-affaire',
  templateUrl: './stat-chifre-affaire.component.html',
  styleUrls: ['./stat-chifre-affaire.component.css']
})
export class StatChifreAffaireComponent implements OnInit {

  barDataJour: any;
  barDataMois: any;
  barOptionsJour: any;
  barOptionsMois: any;
  token: string = '';
  statistique: any = [];
  documentStyle = getComputedStyle(document.documentElement);

  constructor(
    private statistiqueService: StatistiquesService
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token') || '';
    this.getStatistiqueMois();
    this.getStatistiqueJour();
  }

  getStatistiqueMois() {
    this.statistiqueService.getStatChiffreAffaireMois(this.token).subscribe(
      (res: any) => {
        console.log(res, 'res');

        this.barDataMois = this.convertirDonneesEnBarDataMois(res);
        console.log(this.barDataMois, 'barDataMois');

      },
      (error: any) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  getStatistiqueJour() {
    this.statistiqueService.getStatChiffreAffaireJour(this.token).subscribe(
      (res: any) => {
        console.log(res, 'res');

        this.barDataJour = this.convertirDonneesEnBarDataJour(res);
        console.log(this.barDataJour, 'barDataJour');

      },
      (error: any) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  convertirDonneesEnBarDataMois(donnees: any[]): any {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = new Array(labels.length).fill(0);

    donnees.forEach(entry => {
      const index = entry.month - 1;
      data[index] = entry.totalAmount;
    });

    return {
      labels: labels,
      datasets: [
        {
          label: 'Counts par mois',
          backgroundColor: this.documentStyle.getPropertyValue('--primary-500'),
          borderColor: this.documentStyle.getPropertyValue('--primary-500'),
          data: data
        }
      ]
    };
  }

  convertirDonneesEnBarDataJour(donnees: any[]): any {
    const groupedData: { [key: string]: number } = {};

    donnees.forEach(entry => {
      const date = new Date(entry._id);
      const dayKey = date.toISOString().split('T')[0]; // Utilisation de la date au format YYYY-MM-DD comme clé

      if (!groupedData[dayKey]) {
        groupedData[dayKey] = 0;
      }

      groupedData[dayKey] += entry.totalAmount;
    });

    const labels = Object.keys(groupedData).sort();
    const data = labels.map(key => groupedData[key]);

    return {
      labels: labels,
      datasets: [
        {
          label: 'Counts par jour',
          backgroundColor: this.documentStyle.getPropertyValue('--primary-200'),
          borderColor: this.documentStyle.getPropertyValue('--primary-200'),
          data: data
        }
      ]
    };
  }

}
