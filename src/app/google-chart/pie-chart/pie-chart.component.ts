import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  private gLib: any;

  constructor(private gChartService : GoogleChartService) { 
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {
  }

  private drawChart(){
    let chart = new this.gLib.visualization.PieChart(document.getElementById('divDonutchart'));
    let data = new this.gLib.visualization.DataTable();
    data.addColumn('string', 'Credit');
    data.addColumn('number', 'App');
    data.addRows([
      ['Credit', 800],
      ['App Loja', 1000]
    ]);

    let options = {
      'title':'Info',
      pieHole: 0.8,
      colors: ['#007AFF', '#39424C']
  };

    chart.draw(data, options);
  }

}
