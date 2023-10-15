import { Component } from '@angular/core';
import { ChartOptions, ChartConfiguration } from 'chart.js';
import {FormControl, FormGroup} from "@angular/forms";
import {VehicleDataService} from "../../services/vehicle-data.service";
import {ChartsService} from "../../services/charts.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = this.chartsService.generatePieChartLabels();
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartDatasets = this.chartsService.generatePieChartDataset();


  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.chartsService.generateLineChartLabels(),
    datasets: this.chartsService.generateLineChartDataset()
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;




  allVehicleInfo: any[] = [];

  constructor(private vehicleDataService: VehicleDataService, private chartsService: ChartsService) {

    this.dashboardForm = new FormGroup(
      {
        currentDate: new FormControl(new Date()),
      }
    );
   this.allVehicleInfo = this.vehicleDataService.listAll()
  }






  dashboardForm : any;


  filter() {
    console.log(
      this.dashboardForm.value
    );
  }
}
