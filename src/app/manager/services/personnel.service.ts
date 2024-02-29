import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient) { }

  getAllEmploye(token: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.get(
      `${environment.BASE_URL}/employe/list`,
      httpOptions
    );
  }

  getAllCategories(): any {
    return this.http.get(
      `${environment.BASE_URL}/categorie/list`);
  }

  creatEploye(body: any, token: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.post(
      `${environment.BASE_URL}/auth/createAdmin`,
      body,
      httpOptions
    );
  }

  debaucher(body: any, token: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
    console.log('body', body);

    return this.http.post(
      `${environment.BASE_URL}/employe/debaucher`,
      body,
      httpOptions
    );
  }

}
