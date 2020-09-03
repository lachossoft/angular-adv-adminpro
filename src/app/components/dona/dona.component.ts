import { Component, Input, OnInit } from '@angular/core';

//IMPORTACIONES DE TERCEROS

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

//IMPORTACIONES PROPIAS


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  ngOnInit(){
    
  }

  @Input('Title') titulo:string = "Sin titulo" ;
  @Input('Labels') doughnutChartLabels: Label [] =[''];
  @Input('Data') doughnutChartData: MultiDataSet = [[0]]; 

  //public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  //public doughnutChartData: MultiDataSet = [
  //  [350, 450, 100],
  //];
  
  public colors: Color[] = [
    { backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] }
  ]

}
