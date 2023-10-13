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

  get toppings(): FormArray {
    return this.toppingsform.get('toppings') as FormArray;
  }

  toppingsList = [
    {name: 'pepperoni', isChecked: false},
    {name: 'extracheese', isChecked: false},
    {name: 'mushroom', isChecked: true},
  ];

  toppingsform: FormGroup = this.formBuilder.group({
    toppings: this.formBuilder.array(this.toppingsList.map(
      c => this.formBuilder.group(c)
    ))
  });

  addTopping() {
    const newToppingName = `newTopping${this.toppingsList.length}`;
    const newTopping = { name: newToppingName, isChecked: false };
    this.toppingsList.push(newTopping);
    this.toppings.push(this.formBuilder.group(newTopping));


  }

  listCurrentToppings()
  {
    const data = this.toppings.controls.map( control => {
      return {
        name: control?.get('name')?.value,
        isChecked: control?.get('isChecked')?.value,
      };
    });

    console.log(data);
  }


}
