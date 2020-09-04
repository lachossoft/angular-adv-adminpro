import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, timestamp, take, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription

  constructor() { 

    

    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log('sub',valor),
    //   error => console.log('Error', error),
    //   () =>  console.info("obs terminado")
    //  );

    this.intervalSubs = this.retornaIntervalo().subscribe(
      console.log
    )

  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

 

  retornaIntervalo():Observable<number> {
    
    const intervalo$ = interval(100).pipe(
      // take(10),
      map(valor =>{
        return valor + 1;
      }),
      filter(valor => (valor % 2  === 0 )? true : false),
    );

    return intervalo$;

  }

  retornaObservable(): Observable<number>{
    let i = -1;

    const obs$ = new Observable<number>( observe =>{ 

      const intervalo = setInterval ( () => { 
        

        i ++;
        observe.next(i)
        if(i ===4 ){
          clearInterval(intervalo);
          observe.complete();
        }

        if(i === 2){
          observe.error("i llego al valor de 2");
        }


      },1000)


    });
    return obs$;
  }


}
