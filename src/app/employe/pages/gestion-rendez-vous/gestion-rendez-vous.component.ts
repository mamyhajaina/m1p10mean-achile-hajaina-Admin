import { Component, OnInit } from '@angular/core';
import { RendezVousService } from '../../services/rendez-vous.service';
import { RendezVous } from '../../models/rendez-vous';
import { User } from '../../models/User';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-gestion-rendez-vous',
  templateUrl: './gestion-rendez-vous.component.html',
  styleUrls: ['./gestion-rendez-vous.component.css'],
})
export class GestionRendezVousComponent implements OnInit {
  idEmploye: string = '';
  rendezVous: RendezVous[] = [];
  environments = "";
  oneRendezVous: RendezVous[] = [];
  token: any;
  idRendezVous: string = '';
  visible: boolean = false;
  raisonRefuValue: string = '';

  constructor(
    private rendezVousService: RendezVousService,
    // private spinner: NgxSpinnerService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.idEmploye = localStorage.getItem('id') || '';
    console.log(this.token, 'token');
    console.log(this.idEmploye, 'this.idEmploye');
    // this.getRendezVousByIdEmploye();
  }

  getRendezVousByIdEmploye() {
    // this.spinner.show();
    this.rendezVousService.getRendezVousByIdEmploye(this.idEmploye, this.token).subscribe(
      (res: any) => {
        console.log('res', res);
        this.rendezVous = res;
        console.log('rendezVous', this.rendezVous);
        // this.spinner.hide();
      },
      (error: any) => {
        // this.spinner.hide();
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      });
  }

  validerRendezVous(idRendezVous: string) {
    // this.spinner.show();
    this.rendezVousService.validerRendezVous(idRendezVous, this.idEmploye, this.token).subscribe(
      (res: any) => {
        console.log('res', res);
        // this.spinner.hide();
        this.messageService.add({ severity: 'success', summary: 'Valider', detail: 'Rendez vous valider' });
        this.getRendezVousByIdEmploye();
      },
      (error: any) => {
        // this.spinner.hide();
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      });
  }

  refuserRendezVous(idRendezVous: string, raison: string) {
    // this.spinner.show();
    this.rendezVousService.refuserRendezVous(idRendezVous, this.idEmploye, raison, this.token).subscribe(
      (res: any) => {
        console.log('res', res);
        // this.spinner.hide();
        this.messageService.add({ severity: 'warn', summary: 'Annuler', detail: 'Rendez-vous annuler' });
        this.getRendezVousByIdEmploye();
      },
      (error: any) => {
        // this.spinner.hide();
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
    this.visible = false;
    if (this.raisonRefuValue != '') {
      this.refuserRendezVous(this.idRendezVous, this.raisonRefuValue);
    }
  }

  annuler() {
    this.visible = false;
  }
}
