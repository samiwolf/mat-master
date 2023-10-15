import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {VehicleDataService} from "../../services/vehicle-data.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.scss']
})
export class ListVehiclesComponent {
  vehiclesList: any[] = [];
  vehiclesListAll: any[] = [];
  displayedColumns: string[] = ['_ownerName', '_vehicleType', '_licenseNumber', '_entryTime', '_exitTime', '_entryStatus', 'actions'];
  editing = false;
  editingData = null;
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private vehicleDataService: VehicleDataService) {
              this.vehiclesListAll = this.vehicleDataService.listAll();
              this.vehiclesList = this.vehiclesListAll.slice(0, 10);
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

  paginate(event: PageEvent) {
    let start = event.pageIndex * event.pageSize;
    this.vehiclesList = this.vehiclesListAll.slice(start, start + event.pageSize);
    console.log(event);
  }
}
