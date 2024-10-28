export class Calc {

    private static ultimoId = 0;
  
    public id: number
  
    constructor(
      public SCalc: string,
      
    ) {
      this.id = ++Calc.ultimoId;
    }
  }