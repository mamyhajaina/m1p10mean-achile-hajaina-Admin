import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/employe/services/product.service';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-gestion-services',
  templateUrl: './gestion-services.component.html',
  styleUrls: ['./gestion-services.component.css']
})
export class GestionServicesComponent implements OnInit {

  selectedCountryAdvanced: any[] = [];
  filteredCountries: any[] = [];
  countries: any[] = [];
  products: any[] = [];
  expandedRows: expandedRows = {};

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
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
