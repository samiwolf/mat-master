import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {VehicleDataService} from "../../services/vehicle-data.service";

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.scss']
})
export class ListVehiclesComponent {
  vehiclesList: any[] = [];
  displayedColumns: string[] = ['_ownerName', '_vehicleType', '_licenseNumber', '_entryTime', '_exitTime', '_entryStatus', 'actions'];
  editing = false;
  editingData = null;
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private vehicleDataService: VehicleDataService) {
              this.vehiclesList = this.vehicleDataService.listAll();
  }

  update(_id: string) {
    // console.log(this.vehiclesList.find(value => value._id === _id));
   this.editingData =  this.vehiclesList.find(value => value._id === _id);
   this.editing = true;

  }

  updateComplete($event: string) {
    if($event === 'done')
    {
      this.editingData = null;
      this.editing = false;
    }
  }
}
