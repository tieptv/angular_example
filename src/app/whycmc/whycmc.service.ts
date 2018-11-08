import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Whycmc } from '../entity/whycmc';
@Injectable({
  providedIn: 'root'
})
export class WhycmcService {
  private readonly URL = 'http://localhost:3000/whycmc';
  constructor(private http: HttpClient) { }
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

  deleteWhycmc(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }
}
