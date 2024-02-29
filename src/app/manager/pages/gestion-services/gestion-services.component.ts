import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/employe/services/product.service';
import { PersonnelService } from '../../services/personnel.service';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';

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
  skeleton: boolean = true;
  ajoutServiceDialog: boolean = false;
  idCategorie: string = '';
  service: any = {};
  services: any = [];
  token: string = '';
  offreSpecial: boolean = false;
  idService: string = '';
  offreSpecialeModel: any = {};
  offreSpecialeModels: any = [];

  constructor(
    private productService: ProductService,
    private personnelService: PersonnelService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.environments = environment;
    this.productService.getProductsWithOrdersSmall().then(data => { this.products = data; console.log(this.products, 'products'); });
    this.token = localStorage.getItem('token') || '';

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
    this.skeleton = true;
    this.personnelService.getAllCategories().subscribe(
      (res: any) => {
        this.skeleton = false;
        this.categories = res.categories;
        console.log('categories', res);
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

  showAjoutServicePopup(idCategorie: string) {
    this.idCategorie = idCategorie;
    this.ajoutServiceDialog = true;
  }

  hideAjoutServicePopup() {
    this.ajoutServiceDialog = false;
  }

  ajoutService() {
    this.service.id_Categorie = this.idCategorie;
    this.service.image = [{ name: 'noImage.jpeg' }];
    this.services.push(this.service);
    console.log('services', this.services);
    this.personnelService.creatService(this.services, this.token).subscribe(
      (res: any) => {
        console.log('creatService', res);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Service ajoute', life: 3000 });
        this.services = [];
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

  addOffreSpecial(idService: string) {
    this.idService = idService;
    this.offreSpecial = true;
  }

  envoyerOffreSpeciale() {
    this.offreSpecialeModel.Service = this.idService;

    var dateFormatee = this.offreSpecialeModel.dateDebut.getFullYear() + "-" +
      ('0' + (this.offreSpecialeModel.dateDebut.getMonth() + 1)).slice(-2) + "-" +
      ('0' + this.offreSpecialeModel.dateDebut.getDate()).slice(-2) + " " +
      ('0' + this.offreSpecialeModel.dateDebut.getHours()).slice(-2) + ":" +
      ('0' + this.offreSpecialeModel.dateDebut.getMinutes()).slice(-2) + ":" +
      ('0' + this.offreSpecialeModel.dateDebut.getSeconds()).slice(-2) + "." +
      ('00' + this.offreSpecialeModel.dateDebut.getMilliseconds()).slice(-3);
    this.offreSpecialeModel.dateDebut = dateFormatee;

    dateFormatee = this.offreSpecialeModel.dateFin.getFullYear() + "-" +
      ('0' + (this.offreSpecialeModel.dateFin.getMonth() + 1)).slice(-2) + "-" +
      ('0' + this.offreSpecialeModel.dateFin.getDate()).slice(-2) + " " +
      ('0' + this.offreSpecialeModel.dateFin.getHours()).slice(-2) + ":" +
      ('0' + this.offreSpecialeModel.dateFin.getMinutes()).slice(-2) + ":" +
      ('0' + this.offreSpecialeModel.dateFin.getSeconds()).slice(-2) + "." +
      ('00' + this.offreSpecialeModel.dateFin.getMilliseconds()).slice(-3);
    this.offreSpecialeModel.dateFin = dateFormatee;
    this.offreSpecialeModels.push(this.offreSpecialeModel);
    console.log('offreSpecialeModels', this.offreSpecialeModels);

    this.personnelService.creatOffreSpeciale(this.offreSpecialeModels, this.token).subscribe(
      (res: any) => {
        console.log('creatOffreSpeciale', res);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Offre ajoute', life: 3000 });
        this.offreSpecialeModel.dateFin = [];
        this.offreSpecial = false;
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

}
