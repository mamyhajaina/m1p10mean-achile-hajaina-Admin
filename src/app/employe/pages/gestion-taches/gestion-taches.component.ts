import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { RendezVousService } from '../../services/rendez-vous.service';
import { environment } from 'src/environments/environment';
import { CurrentDateService } from 'src/app/service/currentDate.service';

@Component({
  selector: 'app-gestion-taches',
  templateUrl: './gestion-taches.component.html',
  styleUrls: ['./gestion-taches.component.css']
})
export class GestionTachesComponent implements OnInit {

  tacheIncomplet: any[] = [];
  tacheComplet: any[] = [];
  tacheEffectuer: any[] = [];
  products!: Product[];
  idEmploye: string = '';
  rendezVous: any[] = [];
  token: any;
  environments: any;
  commission: any = [];
  dateNow: any;


  constructor(
    private productService: ProductService,
    private rendezVousService: RendezVousService,
    private currendateService: CurrentDateService
  ) { }

  ngOnInit() {
    this.dateNow = this.currendateService.getCurrentDateFormatted('yyyy-MM-dd');
    this.environments = environment;
    this.token = localStorage.getItem('token');
    this.idEmploye = localStorage.getItem('id') || '';
    this.tacheIncomplet = [
      { name: 'San Francisco', code: 'SF' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Berlin', code: 'BRL' },
      { name: 'Barcelona', code: 'BRC' },
      { name: 'Rome', code: 'RM' }];

    this.tacheComplet = [];
    this.getRendezVousNonEffectuer();
    this.getRendezVousEffectuer();
    this.getCommission();
    this.productService.getProductsSmall().then(data => this.products = data);
  }

  getRendezVousNonEffectuer() {
    // this.skeleton = false;
    this.rendezVousService.getRendezVousNonEffectuerByIdEmploye(this.idEmploye, this.token).subscribe(
      (res: any) => {
        this.tacheIncomplet = this.transformToJson(res);
        // this.skeleton = true;
      },
      (error: any) => {
        // this.skeleton = true;
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      });
  }

  private transformToJson(inputJson: any): any[] {
    let arrResult = [];
    for (let item of inputJson) {
      let result = { idRendezVous: item._id, name: item.Service.name, prix: item.Service.prix, dure: item.Service.dure, description: item.Service.description, code: 'LDN', color: '#9698f5', image: item.Service.image[0].name };
      arrResult.push(result);
    }
    return arrResult;
  }

  terminerTache() {
    console.log(this.tacheComplet, 'tacheComplet');
    // this.skeleton = false;
    this.rendezVousService.terminerRedezVous(this.tacheComplet, this.token).subscribe(
      (res: any) => {
        this.tacheComplet = [];
        this.getRendezVousNonEffectuer();
        this.getRendezVousEffectuer();
        this.getCommission()
        // this.skeleton = true;
      },
      (error: any) => {
        // this.skeleton = true;
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      });
  }

  getRendezVousEffectuer() {
    // this.skeleton = false;
    this.rendezVousService.getRendezVousEffectuerByIdEmploye(this.idEmploye, this.token).subscribe(
      (res: any) => {
        this.tacheEffectuer = this.transformToJson(res);
        console.log('this.tacheEffectuer', this.tacheEffectuer);
        // this.skeleton = true;
      },
      (error: any) => {
        // this.skeleton = true;
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      });
  }

  getCommission() {
    const dateNow = this.currendateService.getCurrentDateFormatted('yyyy-MM-dd');
    this.rendezVousService.commission(this.idEmploye, this.token).subscribe(
      (res: any) => {
        console.log('commission', res);

        this.commission = res;
        console.log('commission', this.commission);
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
