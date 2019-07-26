import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  private gLib: any;

  constructor(private gChartService : GoogleChartService) { 
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {
  }

  private drawChart(){
    let data = this.gLib.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses', 'Cash'],
      ['2004',  1000,      400,    1000],
      ['2005',  1170,      460,    1200],
      ['2006',  660,       1120,    800],
      ['2007',  1030,      540,    2100]
    ]);
    var options = {
      legend: 'none',
      colors: ['green', 'blue', 'red']
    };

    let chart = new this.gLib.visualization.LineChart(document.getElementById('divLineChart'));

    chart.draw(data, options);
  }

}
