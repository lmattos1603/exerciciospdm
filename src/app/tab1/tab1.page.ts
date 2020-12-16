import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public edtHoras;
  public edtValor;
  public cbDesconto;
  public salarioB;
  public salarioL;
  public desconto;


  constructor() {}

  onCalcularClick(){
    this.salarioB = this.edtHoras*this.edtValor;
    
    this.salarioL = this.salarioB-(this.salarioB*this.cbDesconto);

    this.desconto = this.salarioB - this.salarioL;
  }

}
