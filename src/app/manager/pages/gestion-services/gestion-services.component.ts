import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/employe/services/product.service';
import { PersonnelService } from '../../services/personnel.service';
import { environment } from 'src/environments/environment';

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
  categories: any[] = [];
  environments: any;

  constructor(
    private productService: ProductService,
    private personnelService: PersonnelService,
  ) { }

  ngOnInit() {
    this.environments = environment;
    this.productService.getProductsWithOrdersSmall().then(data => { this.products = data; console.log(this.products, 'products'); });


    this.getAllCategories();
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

  getAllCategories() {
    this.personnelService.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res.categories;
        console.log('categories', res);
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
