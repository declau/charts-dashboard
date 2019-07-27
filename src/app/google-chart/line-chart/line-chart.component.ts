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
      ['periodo', 'Saldo  Inicial', 'Saida', 'Saldo periodo'],
      ['18/07',  1000,      400,    1000],
      ['19/07',  1170,      460,    1200],
      ['20/07',  660,       1120,    800],
      ['21/07',  1030,      540,    2100]
    ]);
    let options = {
      legend: 'none',
      colors: ['green', 'blue', 'red'],
      'width': '100%',
      'height': '100%'
    };

    let chart = new this.gLib.visualization.LineChart(document.getElementById('divLineChart'));

    chart.draw(data, options);
  }

}
