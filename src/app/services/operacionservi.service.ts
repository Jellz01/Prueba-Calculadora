import { Injectable } from '@angular/core';
import { Calc } from '../models/calc';

@Injectable({
  providedIn: 'root'
})
export class OperacionserviService {

 
  private calculos: Calc [] = [];

  constructor() {

    if (this.estaEnElNavegador()){

      this.cargarCalculos();

    }
    
   }






    addCalculo(calc : Calc){

      this.calculos.push(calc);
      this.guardarCalculos();

    }


    getCalculos(): Calc[] {

      return this.calculos
    }

    private estaEnElNavegador(): boolean {
      return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    }


    guardarCalculos(){

      if (this.estaEnElNavegador()){

        localStorage.setItem('calculos', JSON.stringify(this.calculos));

      }
    }

    cargarCalculos(){

      if (this.estaEnElNavegador()){

        const calculosGuardados = localStorage.getItem('calculos');

      if (calculosGuardados) {

        this.calculos = JSON.parse(calculosGuardados);

      }

      }
    }

}
