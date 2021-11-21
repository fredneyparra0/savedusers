import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SaveUserAction } from 'src/app/store/userAction';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: []
})
export class FormComponent implements OnInit {

  formUserSave = new FormGroup({});

  constructor( private store: Store ) { }

  ngOnInit(): void {
    this.formUserSave = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      country: new FormControl('', [ Validators.required, Validators.minLength(3) ]) 
    })
  }

  saveUser () {
    console.log(this.formUserSave.value);
    this.store.dispatch(new SaveUserAction(this.formUserSave.value));
    this.formUserSave.controls['name'].setValue('');
    this.formUserSave.controls['email'].setValue('');
    this.formUserSave.controls['country'].setValue('');
  }

}
