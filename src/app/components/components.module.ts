import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//IMPORTACION DE MODULOS DE TERCEROS

import { ChartsModule } from 'ng2-charts';

//IMPORTACION DE MODULOS

//IMPORTACION DE COMPONENTES
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';



@NgModule({
  declarations: [IncrementadorComponent, DonaComponent],
  exports:[
    IncrementadorComponent,
    DonaComponent
  ],
  imports: [
    /*modulos de Angular*/
    
    CommonModule,
    FormsModule,
    
    /*modulos de Terceros*/
    
    ChartsModule,

    /*modulos propios*/

  ]
})
export class ComponentsModule { }
