import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // se identifica el elemetono que vamos a cambirar 
  // el href del temma.
  private linkTheme = document.querySelector('#theme');

  // se crea la variable que obtendra la lista de temas disponiles.

  private link: NodeListOf<Element> ;

  constructor() { 
    this.loadTheme();
  }

  //Función loadTheme
  //sirve para obtener el tema seleccionado en el account-settings.

  loadTheme(){

  //se obtiene de localStorage el tema seleccionado en caso de que no 
  //existe se le coloca un valor default.

  const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';

  //se coloca link de estilos del tema el atributo href y la url donde se encuentra el 
  //css del tema.

  this.linkTheme.setAttribute('href',url);

  }

  //funcion changeTheme
  //sirve para hacer la selección del tema y almacenarlo en el locarStorage para
  //mantener la seleccion.
  //los paramaetro que se proporciona a la función es theme de tipo string que solo
  //lleva el nombre del tema.

  changeTheme(theme: string){
    
    this.link = document.querySelectorAll('.selector');

    //se construye la url donde se encuentra el tema seleccionado.

    const url = `./assets/css/colors/${ theme }.css`;

    //se establce el atributo href en link donde se carga el tema.

    this.linkTheme.setAttribute('href',url);

    //se alamacena en el localStorage la url del tema seleccionado.

    localStorage.setItem('theme', url);

    //se estable el check al boton seleccionado.

    this.checkCurrentTheme();

  }

  // Funcion checkCurrrentTheme
  // Sirve para quitar y poner el check al tema seleccionado

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
