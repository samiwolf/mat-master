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

  ngOnInit(): void {
    this.initForm();
  }


  addOrUpdate() {
    // console.log('this.vehicleForm.value',this.vehicleForm.value);
    if(this.editData)
    {
      this.vehicleDataService.update(this.vehicleForm.value);
      this.updated.emit('done');
    }
    else{
      this.vehicleDataService.add(this.vehicleForm.value);
      this.initForm();
      this.router.navigate(['/list']);
    }
    // this.vehicleDataService.listAll();
  }

  initForm()
  {
    if(!this.editData)
    {
      this.vehicleForm = new FormGroup(
        {
          licenseNumber: new FormControl('', [Validators.required]),
          vehicleType: new FormControl('',[Validators.required]),
          ownerName: new FormControl('',[Validators.required]),
          ownerPhone: new FormControl('',[Validators.required]),
          entryStatus: new FormControl('',[Validators.required]),
          entryDate: new FormControl('',[Validators.required]),
          exitDate: new FormControl('',[Validators.required]),
          entryTime: new FormControl('',[Validators.required]),
          exitTime: new FormControl('',[Validators.required]),
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
          entryTime: new FormControl(this.editData._entryTime),
          exitTime: new FormControl(this.editData._exitTime),
        }
      );
    }
  }


}
