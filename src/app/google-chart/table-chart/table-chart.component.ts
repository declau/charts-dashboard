import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-table-chart',
  templateUrl: './table-chart.component.html',
  styleUrls: ['./table-chart.component.scss']
})
export class TableChartComponent implements OnInit {

  private gLib: any;

  constructor(private gChartService: GoogleChartService) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', { 'packages': ['corechart', 'table'] });
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }
  ngOnInit() {
  }

  private drawChart() {
    let chart = new this.gLib.visualization.Table(document.getElementById('divTableChart'));
    let data = new this.gLib.visualization.DataTable();

    data.addColumn('string', 'Pagamentos');
    data.addColumn('number', 'R$ Total');
    data.addColumn('number', 'Pagamentos (Saldo)');
    data.addColumn('number', 'Pagamentos (CC)');
    data.addColumn('number', 'R$ Cartão de Crédito');
    data.addColumn('number', 'Recargas Realizadas');
    data.addColumn('number', 'Recarga');
    data.addColumn('number', 'R$ Total Recebido');

    data.addRows([
      ['2004', 1000, 400, 300, 5000, 6000, 999, 9000],
      ['2005', 1170, 460, 300, 5000, 6000, 999, 9000],
      ['2006', 660, 1120, 300, 5000, 6000, 999, 9000],
      ['2007', 1030, 540, 300, 5000, 6000, 999, 9000],
    ]);

    let options = {
      'title': 'Sales Tabular Data',
      'width': '100%',
      'height': '100%'
    };
    chart.draw(data, options);
  }

}
