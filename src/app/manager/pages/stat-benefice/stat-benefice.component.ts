import { Component, OnInit } from '@angular/core';

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
  beneficeMois: any;
  barOptions: any;

  constructor() { }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    this.beneficeMois = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Bénéfice',
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
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

}
