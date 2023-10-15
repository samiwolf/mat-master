import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {VehicleDataService} from "../../services/vehicle-data.service";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit{
  vehicleForm : any;
  @Input() editData : any;
  @Output() updated: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private vehicleDataService: VehicleDataService) {


  }


  addOrUpdate() {
    if(this.editData)
    {
      this.vehicleDataService.update(this.vehicleForm.value);
      this.updated.emit('done');
    }
    else{
      this.vehicleDataService.add(this.vehicleForm.value);
    }

    this.vehicleDataService.listAll();
  }

  ngOnInit(): void {
    console.log(this.editData);
    if(!this.editData)
    {
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
    else{
      this.vehicleForm = new FormGroup(
        {
          licenseNumber: new FormControl(this.editData._licenseNumber),
          vehicleType: new FormControl(this.editData._vehicleType),
          ownerName: new FormControl(this.editData._ownerName),
          ownerPhone: new FormControl(this.editData._ownerPhone),
          entryStatus: new FormControl(this.editData._entryStatus),
          entryDate: new FormControl(this.editData._entryDate),
          exitDate: new FormControl(this.editData._exitDate),
        }
      );
    }
  }
}
