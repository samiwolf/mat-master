import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddVehicleComponent} from "./add-vehicle/add-vehicle.component";
import {ListVehiclesComponent} from "./list-vehicles/list-vehicles.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddVehicleComponent },
  { path: 'list', component: ListVehiclesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
