import { Image } from './../../../demo/api/image';
import { Salaire } from './../../../general/models/employe';
import { Categorie } from './../../../general/models/categorie';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from 'src/app/employe/models/product';
import { ProductService } from 'src/app/employe/services/product.service';
import { PersonnelService } from '../../services/personnel.service';
import { CountryService } from 'src/app/demo/service/country.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gestion-personnel',
  templateUrl: './gestion-personnel.component.html',
  styleUrls: ['./gestion-personnel.component.css']
})
export class GestionPersonnelComponent implements OnInit {

  productDialog: boolean = false;
  newPersonnelDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  selectedProducts: any[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];
  token: string = '';
  personnels: any = [];
  personnel: any = {};
  idEmploye: string = '';
  defaultDate: Date;
  employeModel: any = {};
  categories: any[] = [];
  filteredCategorie: any[] = [];
  environments: any;
  emplois: any;
  salaire: any = 0;
  nameDebaucher: string = '';
  emploisDebauche: any = [];

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private personnelService: PersonnelService,
    private countryService: CountryService
  ) {
    this.defaultDate = new Date();
  }

  ngOnInit() {
    this.token = localStorage.getItem('token') || '';
    this.environments = environment;
    this.countryService.getCountries().then(countries => {
      this.categories = countries;
      console.log(this.categories, 'getCountries');

    });

    this.cols = [
      { field: 'product', header: 'Product' },
      { field: 'price', header: 'Price' },
      { field: 'category', header: 'Category' },
      { field: 'rating', header: 'Reviews' },
      { field: 'inventoryStatus', header: 'Status' }
    ];

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
    this.getAllEmploye();
    this.getAllCategories();
  }

  debaucher() {
    console.log(this.emploisDebauche, 'emploisDebauche');

    this.personnelService.debaucher(this.emploisDebauche, this.token).subscribe(
      (res: any) => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Debaucher success', life: 3000 });
        this.getAllEmploye();
      },
      (error: any) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
    this.deleteProductDialog = false;
    this.deleteProductsDialog = false;
  }

  getAllCategories() {
    this.personnelService.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
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

  filterCountry(event: any) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.categories.length; i++) {
      const country = this.categories[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCategorie = filtered;
  }

  saveEmplye() {
    let emplois = [];
    if (this.emplois.length > 0) {
      for (let item of this.emplois) {
        emplois.push({ Categorie: item._id });
      }
    }
    this.employeModel.emplois = emplois;
    if (this.salaire != 0) {
      this.employeModel.salaire = [{ salaire: this.salaire }];
    }
    this.employeModel.role = 'Emploie';
    this.employeModel.image = 'avatar.webp';
    console.log(this.employeModel, 'employeModel');
    this.personnelService.creatEploye(this.employeModel, this.token).subscribe(
      (res: any) => {
        console.log('creatEploye', res);
        this.newPersonnelDialog = false;
        this.getAllEmploye();
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Employe enregistrer', life: 3000 });
      },
      (error: any) => {
        this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Employe non enregistrer' });
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  getAllEmploye() {
    this.personnelService.getAllEmploye(this.token).subscribe(
      (res: any) => {
        this.personnels = res;
        console.log('personnel', this.personnels);
      },
      (error: any) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  openNew() {
    this.newPersonnelDialog = true;
  }

  deleteSelectedProducts() {
    for (let item of this.selectedProducts) {
      this.emploisDebauche.push({ idEmploye: item._id });
    }
    console.log(this.emploisDebauche, 'emploisDebauche');
    this.deleteProductsDialog = true;
  }

  editEmploye(idEmploye: string) {
    this.idEmploye = idEmploye;

    this.productDialog = true;
  }

  debaucherDialogue(idEmploye: string, name: string) {
    this.emploisDebauche[0] = { idEmploye: idEmploye };
    this.nameDebaucher = name;
    console.log('nameDebaucher', this.nameDebaucher);
    this.deleteProductDialog = true;
  }

  confirmDeleteSelected() {
    this.deleteProductsDialog = false;
    this.personnels = this.personnels.filter(val => !this.selectedProducts.includes(val));
    console.log(this.personnels, 'products');

    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    this.selectedProducts = [];
  }


  hideDialog() {
    this.productDialog = false;
    this.newPersonnelDialog = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.personnel.name?.trim()) {
      if (this.personnel.id) {
        // @ts-ignore
        this.product.email = this.product.email.value ? this.product.email.value : this.product.email;
        this.personnels[this.findIndexById(this.personnels.id)] = this.personnel;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
      } else {
        this.personnel._id = this.createId();
        this.personnel.username = this.createId();
        this.personnel.adresse = 'product-placeholder.svg';
        // @ts-ignore
        this.product.email = this.product.email ? this.product.email.value : 'INSTOCK';
        this.personnels.push(this.personnel);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
      }

      this.personnels = [...this.personnels];
      this.productDialog = false;
      this.personnel = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.personnels.length; i++) {
      if (this.personnels[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

}
