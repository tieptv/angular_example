import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Whycmc } from '../entity/whycmc';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WhycmcService {
  private readonly URL = 'http://localhost:3000/whycmc';
  constructor(private http: HttpClient) {}
  getWhycmcs() {
    console.log([this.http.get<Whycmc[]>(this.URL)]);
    return this.http.get<Whycmc[]>(this.URL);
  }
  getWhycmc(id: number) {
    return this.http.get<Whycmc>(this.URL + '/' + id);
  }
  createWhycmc(p: Whycmc) {
    return this.http.post<Whycmc>(this.URL, p);
  }

  updateWhycmc(id: number, data: Partial<Whycmc>) {
    return this.http.patch<Whycmc>(this.URL + '/' + id, data);
  }
  applyWhycmc(content: Whycmc) {
    const params = new HttpParams().set('ID', content.id.toString());
    const headers = new HttpHeaders().set('content-type', 'application/json');
    // var body = {
    //   Fnam: emp.Fname,
    //   Lname: emp.Lname,
    //   Email: emp.Email,
    //   ID: emp.ID
    // };
    return this.http.put<Whycmc>(this.URL + '/' + content.id, content, {
      headers,
      params
    });
  }

  deleteWhycmc(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }
}
