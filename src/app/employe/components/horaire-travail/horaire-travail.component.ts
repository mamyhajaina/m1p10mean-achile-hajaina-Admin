import { Component, Input, OnInit } from '@angular/core';
import { ProfileHoraireTravailService } from '../../services/ProfileHoraireTravail.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-horaire-travail',
  templateUrl: './horaire-travail.component.html',
  styleUrls: ['./horaire-travail.component.css']
})
export class HoraireTravailComponent implements OnInit {

  @Input() idEmploye: string = '';
  horaireTravail: any[] = [];
  token: string = '';

  constructor(
    private profilHoraireTravailService: ProfileHoraireTravailService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token') || '';
    console.log(this.idEmploye, 'idEmploye');
    this.getHoraireTravail();
  }

  getHoraireTravail() {
    this.profilHoraireTravailService.getHoraireTravail(this.idEmploye, this.token).subscribe(
      (res: any) => {
        this.horaireTravail = this.transformToJson(res);
        // this.profile.solde = res;
      },
      (error: any) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories : ",
          error
        );
      }
    );
  }

  private transformToJson(inputJson: any): any[] {
    let arrResult = [];
    for (let item of inputJson) {
      const dateTimeDebut = this.convertStringToDate(item.dateTimeDebut);
      const dateTimeFin = this.convertStringToDate(item.dateTimeFin);
      let result = { status: this.formatDate(dateTimeDebut, 'EEEE MM YYYY'), date: this.formatDate(dateTimeDebut, 'HH:mm') + ' au ' + this.formatDate(dateTimeFin, 'HH:mm'), icon: '', color: '#9698f5', image: 'game-controller.jpg' };
      arrResult.push(result);
    }
    return arrResult;
  }

  convertStringToDate(dateString: string): Date {
    return new Date(dateString);
  }

  formatDate(date: Date, format: string): string {
    return this.datePipe.transform(date, format);
  }

}
