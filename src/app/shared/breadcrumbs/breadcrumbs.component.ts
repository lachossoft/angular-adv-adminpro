import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo:string;

  public tituloSub$ : Subscription;

  constructor( private router: Router) { 
    this.tituloSub$ = this.getArgumentosRutas().subscribe( ({ titulo }) =>{
      this.titulo = titulo;
      document.title = `AdminPro - ${ titulo }`;
    });
  }
  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }

  getArgumentosRutas(){
    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( ( event:ActivationEnd ) => event.snapshot.firstChild === null ),
      map( (event:ActivationEnd) => event.snapshot.data ),
    );
  }
  
}
