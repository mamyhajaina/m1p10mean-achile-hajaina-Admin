import { Component, OnInit } from '@angular/core';
import { StatistiquesService } from '../../services/statistiques.service';

@Component({
  selector: 'app-stat-benefice',
  templateUrl: './stat-benefice.component.html',
  styleUrls: ['./stat-benefice.component.css']
})
export class StatBeneficeComponent implements OnInit {

  selectedCountryAdvanced: any[] = [];
  filteredCountries: any[] = [];
  countries: any[] = [];
  products!: any[];
  benefice: any;
  barOptions: any;
  documentStyle = getComputedStyle(document.documentElement);
  token: string = '';

  constructor(
    private statistiqueService: StatistiquesService
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token') || '';
    this.getStatistique();
  }

  filterCountry(event: any) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      const country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

  getStatistique() {
    this.statistiqueService.getStatBenefice(this.token).subscribe(
      (res: any) => {
        console.log(res, 'res');

        this.benefice = this.convertirDonneesEnPieData(res);
        console.log(this.benefice, 'barDataMois');

      },
      (error: any) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  convertirDonneesEnPieData(donnees: any): any {
    const labels = Object.keys(donnees);
    const data = Object.values(donnees);
    const backgroundColors = [
      this.documentStyle.getPropertyValue('--indigo-500'),
      this.documentStyle.getPropertyValue('--purple-500'),
      this.documentStyle.getPropertyValue('--teal-500'),
      this.documentStyle.getPropertyValue('--orange-500'),
      this.documentStyle.getPropertyValue('--green-500'),
      this.documentStyle.getPropertyValue('--red-500')
    ];
    const hoverBackgroundColors = [
      this.documentStyle.getPropertyValue('--indigo-400'),
      this.documentStyle.getPropertyValue('--purple-400'),
      this.documentStyle.getPropertyValue('--teal-400'),
      this.documentStyle.getPropertyValue('--orange-400'),
      this.documentStyle.getPropertyValue('--green-400'),
      this.documentStyle.getPropertyValue('--red-400')
    ];

    return {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: backgroundColors,
          hoverBackgroundColor: hoverBackgroundColors
        }
      ]
    };
  }

}
