import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
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

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
