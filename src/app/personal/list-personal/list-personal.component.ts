import { Component, OnInit } from '@angular/core';
import { concatMap } from 'rxjs/operators';
import { PersonalService } from 'src/app/service/personal.service';
import { Personal } from 'src/app/entity/personal';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-list-personal',
  templateUrl: './list-personal.component.html',
  styleUrls: ['./list-personal.component.scss']
})
export class ListPersonalComponent implements OnInit {
  personals: Personal[] = [];
  constructor(private service: PersonalService, private router: Router) {}
  ngOnInit() {
    this.service.getPersonals().subscribe(res => (this.personals = res));
  }
  delete(p: Personal) {
    this.service
      .deletePersonal(p.id)
      .pipe(concatMap(_ => this.service.getPersonals()))
      .subscribe(res => (this.personals = res));
  }
  update(p: Personal) {
    this.router.navigate(['/personal', p.id, 'edit']);
  }
  insert() {
    this.router.navigate(['/personal/insert']);
  }
}
