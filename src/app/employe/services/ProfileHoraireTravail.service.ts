import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileHoraireTravailService {

  constructor(private http: HttpClient) { }

  getSolde(idUser: string, token: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.get(
      `${environment.BASE_URL}/porteFeuille/solde/${idUser}`,
      httpOptions
    );
  }

  getHoraireTravail(idUser: string, token: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.get(
      `${environment.BASE_URL}/horaireTravail/list/user/${idUser}`,
      httpOptions
    );
  }

}
