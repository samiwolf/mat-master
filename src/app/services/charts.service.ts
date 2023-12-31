import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor() { }

  generateLineChartLabels(type = 'm')
  {
    if(type == 'm')
    {
      return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
    }
    else if(type == 'd')
    {
      return Array.from({length: 30}, (_, i) => i + 1)
    }
    return ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];

  }

  generatePieChartLabels()
  {
    return  ['Car', 'Truck' , 'Microbus' ];
  }

  generateLineChartDataset(type = 'm')
  {

    let dataPoints = [];
    if(type === 'm')
    {
      dataPoints = Array.from({length: 12}, () => Math.floor(Math.random() * 40 * 30));
    }
    else if(type === 'd')
    {
      dataPoints = Array.from({length: 30}, () => Math.floor(Math.random() * 40));
    }
    else{
        dataPoints = Array.from({length: 7}, () => Math.floor(Math.random() * 40 * 7))
    }
    return [
      {
        data: dataPoints,
        label: 'Total Vehicles',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ];
  }

  generatePieChartDataset() {
    return [ {
      data: Array.from({length: 3}, () => Math.floor(Math.random() * 33))
    } ];
  }

  generateParkingData()
  {
   return [
      {name: 'Cars',    count: Math.floor(Math.random() * 20)},
      {name: 'Truck',  count: Math.floor(Math.random() * 20)},
      {name: 'Microbus', count: Math.floor(Math.random() * 20)},
    ];
  }
}
