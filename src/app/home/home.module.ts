import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {AppMaterialModule} from "../app-material/app-material.module";
import {HomeComponent} from "./home/home.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        AppMaterialModule,
        ReactiveFormsModule
    ]
})
export class HomeModule { }
