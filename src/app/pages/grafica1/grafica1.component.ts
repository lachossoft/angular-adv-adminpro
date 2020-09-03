import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public etiqueta1:string[] = ['Programas', 'Pcs', 'Laptops'];
  public datos1 = [[350,450,100]]

  public datos2 = [[350,60,50]]


}
