import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonalService } from 'src/app/service/personal.service';
@Component({
  selector: 'app-edit-personal',
  templateUrl: './edit-personal.component.html',
  styleUrls: ['./edit-personal.component.scss']
})
export class EditPersonalComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  constructor(
    private fb: FormBuilder,
    private service: PersonalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.editForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      hobby: [''],
      des: ['']
    });
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getPersonal(this.id).subscribe(p => {
      this.editForm.patchValue(p);
    });
  }
  onSubmit() {
    const { valid, value } = this.editForm;
    if (valid) {
      this.service.updatePersonal(this.id, value).subscribe(_ => {
        this.router.navigate(['/personal']);
      });
    } else {
      console.error('invalid');
    }
  }
}
