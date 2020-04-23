import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public urlAPI: string;
  constructor( private http: HttpClient) {
    this.urlAPI = environment.apiURL;
  }

  getListPhotos(page): Observable<any> {
    return this.http.get(`${this.urlAPI}photos?page=${page}&per_page=20`);
  }

  getPhotoById(id) {
    return this.http.get(`${this.urlAPI}photos/${id}`);
  }

  getCollection(value) {
    return this.http.get(`${this.urlAPI}search/photos/?page=1&order_by=latest&query=${value}`);
  }



}
