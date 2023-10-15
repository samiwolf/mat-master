import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {VehicleDataService} from "../../services/vehicle-data.service";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent {
  vehicleForm : FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private vehicleDataService: VehicleDataService) {

    this.vehicleForm = new FormGroup(
      {
        licenseNumber: new FormControl('',),
        vehicleType: new FormControl('',),
        ownerName: new FormControl('',),
        ownerPhone: new FormControl('',),
        entryStatus: new FormControl('',),
        entryDate: new FormControl('',),
        exitDate: new FormControl('',),
      }
    );

  }


  listAllValues() {
    this.vehicleDataService.add(this.vehicleForm.value);
    this.vehicleDataService.listAll();
  }
}
