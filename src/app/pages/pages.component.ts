import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  // se identifica el elemetono que vamos a cambirar 
  // el href del temma.

  public linkTheme = document.querySelector('#theme');

  constructor() { }
  
  ngOnInit(): void {
    
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

}
