import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  
  // se identifica el elemetono que vamos a cambirar 
  // el href del temma.
  
  public linkTheme = document.querySelector('#theme');
  
  //se establece la varialbe que va contener la lista de elementos que 
  //contenga la clase .selector

  public link: NodeListOf<Element> ;
  
  constructor() { }
  
  ngOnInit(): void {
    
    //obtiene todos la lista de elementos que tienen la clase .selector
    
    this.link = document.querySelectorAll('.selector');

    this.checkCurrentTheme();
    
  }
  
  //funcion changeTheme
  //sirve para hacer la selección del tema y almacenarlo en el locarStorage para
  //mantener la seleccion.
  //los paramaetro que se proporciona a la función es theme de tipo string que solo
  //lleva el nombre del tema.

  changeTheme(theme: string){
    
    //se construye la url donde se encuentra el tema seleccionado.

    const url = `./assets/css/colors/${ theme }.css`;

    //se establce el atributo href en link donde se carga el tema.

    this.linkTheme.setAttribute('href',url);

    //se alamacena en el localStorage la url del tema seleccionado.

    localStorage.setItem('theme', url);

    //se estable el check al boton seleccionado.

    this.checkCurrentTheme();

  }

  checkCurrentTheme(){
    

    // se barre la lista de elementos de la lista.
    this.link.forEach(elem => {

      //se remueve la clase working de los elementos de la lista.

      elem.classList.remove('working');

      //se obtiene el el valor del atributo data-theme

      const btnTheme = elem.getAttribute('data-theme');
      
      //se construye la url del boton

      const btnThemeULR = `./assets/css/colors/${ btnTheme }.css`;
      
      //se construye la url del tema actual seleccioinado.

      const currentTheme = this.linkTheme.getAttribute('href');

      //se valida que el btnThemeUrl se ha igual del currentTheme 
      //esto para que se le coloque el working 

      if( btnThemeULR === currentTheme ) {
        elem.classList.add('working');
      }


    });

  }

}
