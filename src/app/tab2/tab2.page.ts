import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public edtPeso;
  public edtAltura;
  public imc;
  public resultado;
  public resultado2;
  public color;

  constructor() {}

  onCalcularClick(){
    this.imc = this.edtPeso / (this.edtAltura*this.edtAltura);
    
    if(this.imc < 18.5){
      this.resultado = "";
      this.resultado2 = "Você está abaixo do peso ideal";
    }else if(this.imc >= 18.5 && this.imc < 25){
      this.resultado2 = "";
      this.resultado = "Parabéns, Você está em seu peso normal";
      this.color = "success";
    }else if(this.imc >= 25 && this.imc < 30){
      this.resultado2 = "";
      this.resultado = "Você está acima do seu peso (sobrepeso)";
      this.color = "warning";
    }else if(this.imc >= 30 && this.imc < 35){
      this.resultado = "";
      this.resultado2 = "Obesidade grau 1";
    }else if(this.imc >= 35 && this.imc < 40){
      this.resultado2 = "";
      this.resultado = "Obesidade grau 2";
      this.color = "danger";
    }else if(this.imc >= 40){
      this.resultado2 = "";
      this.resultado = "Obesidade grau 3";
      this.color = "danger";
    }
  }

}
