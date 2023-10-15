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
  displayedColumns: string[] = ['_ownerName', '_vehicleType', '_licenseNumber', '_entryDate', '_exitDate', '_entryStatus', 'actions'];
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private vehicleDataService: VehicleDataService) {
              this.vehiclesList = this.vehicleDataService.listAll();
    console.log(this.vehiclesList)
  }

}
