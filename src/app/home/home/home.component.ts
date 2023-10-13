import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data = [{ name: '', description: '' }];
  constructor(private router: Router,
              private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

  }

  form: FormGroup = this.formBuilder.group({
    contacts: this.formBuilder.array(this.data.map(
      c => this.formBuilder.group(c)
    ))
  });

  // form: FormGroup = this.formBuilder.group({
//   contacts: this.formBuilder.array(this.data.map(
//     contact => this.formBuilder.group(contact)
//   ))
// });

  get contacts(): FormArray {
    return this.form.get('contacts') as FormArray;
  }

  addContact() {
    this.contacts.push(this.formBuilder.group({
      name: '',
      description: ''
    }))
  }
}
