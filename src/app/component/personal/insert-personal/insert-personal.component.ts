import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonalService } from 'src/app/service/personal.service';
@Component({
  selector: 'app-insert-personal',
  templateUrl: './insert-personal.component.html',
  styleUrls: ['./insert-personal.component.scss']
})
export class InsertPersonalComponent implements OnInit {
  insertForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: PersonalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.insertForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      hobby: [''],
      description: ['']
    });
  }
  onSubmit() {
    const { valid, value } = this.insertForm;
    const form = new FormData();
    form.append('personal',JSON.stringify(value));
    if (valid) {
      this.service.createPersonal(form).subscribe(_ => {
        this.router.navigate(['/personal']);
      });
    } else {
      console.error('invalid');
    }
  }
}
