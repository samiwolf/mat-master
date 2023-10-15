import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor() {

    this.dashboardForm = new FormGroup(
      {
        currentDate: new FormControl(new Date()),
      }
    );
  }
  title = 'ng2-charts-demo';
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download Sales' ], [ 'In Store Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  today: any;



  dashboardForm : any;


  filter() {
    console.log(
      this.dashboardForm.value
    );
  }
}
