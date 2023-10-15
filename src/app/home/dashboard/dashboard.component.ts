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


  public lineChartDataDaily: ChartConfiguration<'line'>['data'] = {
    labels: this.chartsService.generateLineChartLabels('d'),
    datasets: this.chartsService.generateLineChartDataset('d'),
  };

  public lineChartDataMonthly: ChartConfiguration<'line'>['data'] = {
    labels: this.chartsService.generateLineChartLabels('m'),
    datasets: this.chartsService.generateLineChartDataset('m'),
  };

  public lineChartDataYearly: ChartConfiguration<'line'>['data'] = {
    labels: this.chartsService.generateLineChartLabels('y'),
    datasets: this.chartsService.generateLineChartDataset('y'),
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
  totalSpot = 100;



  dataSource : any [] = this.chartsService.generateParkingData();

  totalParked = this.dataSource.reduce((sum,item) => sum + item.count, 0);

  displayedColumns: string[] = ['name', 'count'];


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
    this.dataSource = this.chartsService.generateParkingData();
    this.totalParked = this.dataSource.reduce((sum,item) => sum + item.count, 0);
  }
}
