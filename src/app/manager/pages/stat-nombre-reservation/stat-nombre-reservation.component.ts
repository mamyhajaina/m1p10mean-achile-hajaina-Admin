import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-nombre-reservation',
  templateUrl: './stat-nombre-reservation.component.html',
  styleUrls: ['./stat-nombre-reservation.component.css']
})
export class StatNombreReservationComponent implements OnInit {

  barDataJourMois: any;
  barOptionsJour: any;
  barOptionsMois: any;
  token: string = '';
  statistique: any = [];

  constructor() { }

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

    this.barDataJourMois = {
      labels: getCurrentMonthDays(),
      datasets: [
        {
          label: 'Chiffre Affaire',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          tension: .4
        }
      ]
    };
  }

}
