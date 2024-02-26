import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RendezVousService } from '../../services/rendez-vous.service';
import { RendezVous } from '../../models/rendez-vous';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Customer, Representative } from '../../models/customer';
import { Product } from '../../models/product';
import { CustomerService } from '../../services/customer.service';
import { ProductService } from '../../services/product.service';
import { Table } from 'primeng/table';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

interface expandedRows {
  [key: string]: boolean;
}
@Component({
  selector: 'app-gestion-rendez-vous',
  templateUrl: './gestion-rendez-vous.component.html',
  styleUrls: ['./gestion-rendez-vous.component.css'],
})
export class GestionRendezVousComponent implements OnInit {
  idEmploye: string = '';
  rendezVous: RendezVous[] = [];
  oneRendezVous: RendezVous[] = [];
  token: any;
  idRendezVous: string = '';
  visible: boolean = false;
  raisonRefuValue: string = '';
  customers1: Customer[] = [];
  environments: any;
  skeleton: boolean = false;

  customers2: Customer[] = [];

  customers3: Customer[] = [];

  selectedCustomers1: Customer[] = [];

  selectedCustomer: Customer = {};

  representatives: Representative[] = [];

  statuses: any[] = [];

  products: Product[] = [];

  rowGroupMetadata: any;

  expandedRows: expandedRows = {};

  activityValues: number[] = [0, 100];

  isExpanded: boolean = false;

  idFrozen: boolean = false;

  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  constructor(
    private rendezVousService: RendezVousService,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private customerService: CustomerService,
    private productService: ProductService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.environments = environment;

    this.token = localStorage.getItem('token');
    this.idEmploye = localStorage.getItem('id') || '';

    this.customerService.getCustomersLarge().then(customers => {
      this.customers1 = customers;
      this.loading = false;

      // @ts-ignore
      this.customers1.forEach(customer => customer.date = new Date(customer.date));
    });
    this.getRendezVousByIdEmploye();
    this.productService.getProductsWithOrdersSmall().then(data => this.products = data);


    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];
  }

  getRendezVousByIdEmploye() {
    this.skeleton = false;
    this.rendezVousService.getRendezVousByIdEmploye(this.idEmploye, this.token).subscribe(
      (res: any) => {
        this.rendezVous = res;
        this.skeleton = true;
      },
      (error: any) => {
        this.skeleton = true;
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      });
  }

  validerRendezVous() {

    this.skeleton = false;
    this.rendezVousService.validerRendezVous(this.idRendezVous, this.idEmploye, this.token).subscribe(
      (res: any) => {
        this.skeleton = true;
        this.messageService.add({ severity: 'success', summary: 'Valider', detail: 'Rendez vous valider' });
        this.getRendezVousByIdEmploye();
      },
      (error: any) => {
        this.skeleton = true;
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      });
  }

  refuserRendezVous(idRendezVous: string, raison: string) {
    this.skeleton = false;
    this.rendezVousService.refuserRendezVous(idRendezVous, this.idEmploye, raison, this.token).subscribe(
      (res: any) => {
        this.skeleton = true;
        this.messageService.add({ severity: 'warn', summary: 'Annuler', detail: 'Rendez-vous annuler' });
        this.getRendezVousByIdEmploye();
      },
      (error: any) => {
        this.skeleton = true;
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      });
  }

  showDialog(idRendezVous: string) {
    this.visible = true;
    this.idRendezVous = idRendezVous;
  }

  confirme() {
    if (this.raisonRefuValue != '') {
      this.visible = false;
      this.refuserRendezVous(this.idRendezVous, this.raisonRefuValue);
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Le raison est vide', life: 3000 });
    }
  }

  annuler() {
    this.visible = false;
  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.customers3) {
      for (let i = 0; i < this.customers3.length; i++) {
        const rowData = this.customers3[i];
        const representativeName = rowData?.representative?.name || '';

        if (i === 0) {
          this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
        }
        else {
          const previousRowData = this.customers3[i - 1];
          const previousRowGroup = previousRowData?.representative?.name;
          if (representativeName === previousRowGroup) {
            this.rowGroupMetadata[representativeName].size++;
          }
          else {
            this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
          }
        }
      }
    }
  }

  expandAll() {
    if (!this.isExpanded) {
      this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');

    } else {
      this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }

  formatCurrency(value: number) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  valider(idRendezVous: string) {
    this.setRendezVous(idRendezVous);
    this.confirmationService.confirm({
      key: 'valider',
      message: 'Etes-vous sûr de valider ce rendez-vous ?',
      accept: () => {
        this.validerRendezVous();
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
    });
  }

  refuser(idRendezVous: string) {
    this.visible = true;
    this.idRendezVous = idRendezVous;
  }

  setRendezVous(idRendezVous: string) {
    this.idRendezVous = idRendezVous;
  }
}
