import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


//IMPORTACION DE COMPONENTES

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';





const routes: Routes = [

    {
        path:'dashboard', 
        component: PagesComponent,
        children: [
          {path: '', component: DashboardComponent, data: { titulo: 'Dasboard'  } },
          {path: 'progress', component: ProgressComponent, data: { titulo: 'Progres'  }},
          {path: 'grafica1', component: Grafica1Component, data: { titulo: 'Grafica1'  }},
          {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Settings'  }},
          {path: 'promesa', component: PromesaComponent, data: { titulo: 'Promesa'  }},
          {path: 'rxjs', component: RxjsComponent, data: { titulo: 'rxjs'  }},
          {path: '', redirectTo: '/dashboard', pathMatch:'full'},
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
