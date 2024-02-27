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

  constructor(
    private statistiqueService: StatistiquesService
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token') || '';
    const documentStyle = getComputedStyle(document.documentElement);

    const getCurrentMonthDays = () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // Note: getMonth() returns 0-based index
      const currentYear = currentDate.getFullYear();
      const lastDayOfMonth = new Date(currentYear, currentMonth, 0).getDate();
      const monthName = currentDate.toLocaleDateString('en-US', { month: 'long' }); // Récupérer le nom du mois

      const days = [];
      for (let day = 1; day <= lastDayOfMonth; day++) {
        days.push(`${monthName} ${day}`);
      }

      return days;
    };

    this.tempsMoyenTravail = {
      labels: getCurrentMonthDays(),
      datasets: [
        {
          label: 'Employe 1',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          tension: .4
        },
        {
          label: 'Employe 2',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--primary-200'),
          borderColor: documentStyle.getPropertyValue('--primary-200'),
          tension: .4
        }
      ]
    };

    this.getStatistique();
  }


  getStatistique() {
    this.statistiqueService.getStatHoraireEmploye(this.token).subscribe(
      (res: any) => {
        this.statistique = res;
        console.log(this.statistique, 'statistique');

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
