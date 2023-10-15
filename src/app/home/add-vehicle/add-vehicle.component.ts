import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent {
  loginForm : FormGroup;
  hide=true;
  constructor(private router: Router,
              private formBuilder: FormBuilder) {
    this.loginForm = new FormGroup(
      {
        licenseNumber: new FormControl('',[Validators.required]),
        vehicleType: new FormControl('',[Validators.required]),
        ownerName: new FormControl('',[Validators.required]),
        ownerPhone: new FormControl('',[Validators.required]),
        entryStatus: new FormControl('',[Validators.required]),
        entryDate: new FormControl('',[Validators.required]),
        exitDate: new FormControl('',[Validators.required]),
      }
    );

  }

  onLogin()
  {
    this.router.navigate(['question-builder']);

  }



}
