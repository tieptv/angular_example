import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personal } from '../entity/personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private readonly URL = 'http://localhost:3000/personals';
  constructor(private http: HttpClient) {}
  getPersonals() {
    console.log([this.http.get<Personal[]>(this.URL)]);
    return this.http.get<Personal[]>(this.URL);
  }
  getPersonal(id: number) {
    return this.http.get<Personal>(this.URL + '/' + id);
  }
  createPersonal(p: Personal) {
    return this.http.post<Personal>(this.URL, p);
  }

  updatePersonal(id: number, data: Partial<Personal>) {
    return this.http.patch<Personal>(this.URL + '/' + id, data);
  }

  deletePersonal(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }
}
