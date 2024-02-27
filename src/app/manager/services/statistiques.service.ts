import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  constructor(private http: HttpClient) { }

  getStatHoraireEmploye(token: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.get(
      `${environment.BASE_URL}/horaireTravail/list/statHoraireEmploye`,
      httpOptions
    );
  }

}
