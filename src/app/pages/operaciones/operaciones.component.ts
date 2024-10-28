import { Component, ElementRef, ViewChild } from '@angular/core';
import { Calc } from '../../models/calc';
import { OperacionserviService } from '../../services/operacionservi.service';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.scss'
})
export class OperacionesComponent {

  @ViewChild ('SCalc') SCalc! : ElementRef;

  calculos : Calc [] = [];




  constructor(private calcServi: OperacionserviService){}


  addCalculo(){
    let SCalc = this.SCalc.nativeElement.value;

    let calcN = new Calc(SCalc)
  
    this.calcServi.addCalculo(calcN)
  
  }
  ngOnInit(): void {
    
    this.calculos = this.calcServi.getCalculos();
  }




  eliminarCalculo(indice: number) {

    indice = indice -1;
    if (indice >= 0 && indice < this.calculos.length) {  // Ensure the index is valid
        console.log("Deleting course at index:", indice);
        console.log("Course to be deleted:", this.calculos[indice]); 

        this.calculos.splice(indice, 1);  // Remove the course at the specified index

        console.log("Course deleted. Remaining courses:", this.calculos); 
        
        if (this.calculos.length === 0) {
            console.log("No courses remaining.");
        }

        this.calcServi.getCalculos();  // Save the updated list
    } else {
        console.log("Invalid index. No course deleted.");
        console.log(indice);
    }
}



}
