import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from "./main/main.component";
import {AppMaterialModule} from "../app-material/app-material.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    AppMaterialModule
  ]
})
export class MainModule { }
