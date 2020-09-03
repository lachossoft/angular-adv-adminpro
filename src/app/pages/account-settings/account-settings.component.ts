import { Component, OnInit } from '@angular/core';

/*IMPORTACION DE SERVICIO PROPIOS*/

import { SettingsService } from 'src/app/services/settings.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  
  
  constructor( private settingsService: SettingsService) { }
  
  ngOnInit(): void {
      
  }
  
  //funcion changeTheme
  //llama el procedicion changeTheme del servicio SettingsService para 
  //realizar los cambios de de tema así como validar que tema esta seleccionado

  changeTheme(theme: string){
    
    this.settingsService.changeTheme( theme );
  }

}
