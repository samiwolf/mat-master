import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {AppMaterialModule} from "../app-material/app-material.module";
import {HomeComponent} from "./home/home.component";
import {ReactiveFormsModule} from "@angular/forms";
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';


@NgModule({
  declarations: [HomeComponent, AddVehicleComponent],
  exports: [HomeComponent, AddVehicleComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        AppMaterialModule
    ]
})
export class HomeModule { }
