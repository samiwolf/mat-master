import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor() { }

  generateLineChartLabels()
  {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ];
  }

  generatePieChartLabels()
  {
    return  ['Car', 'Truck' , 'Microbus' ];
  }

  generateLineChartDataset()
  {
    return [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ];
  }

  generatePieChartDataset() {
    return [ {
      data: [ 300, 500, 100 ]
    } ];
  }
}
