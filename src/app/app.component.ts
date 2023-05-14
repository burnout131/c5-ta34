import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'c5-ta34';

  numeroActual: any = '';
  numeroAnterior: any = '';
  operador: any = '';
  calculoFinalizado: boolean = false;

  //Función para insertar un número
  insertaNumero(num: any) {
    if (this.calculoFinalizado) {
      this.borrarTodo();
    }
    this.numeroActual += num;
    //Actualizamos la pantalla con el numero insertado
    this.actualizaPantalla(this.numeroActual);
  }

  //Función para insertar un operador
  insertaOperador(op: any) {
    if (this.calculoFinalizado) {
        this.calculoFinalizado = false;
    }
    if (this.operador) {
        this.calcular();
    }
    this.operador = op;
    this.numeroAnterior = this.numeroActual;
    this.numeroActual = '';
}

//Función para calcular el resultado
calcular() {
  let resultado : any;
  switch (this.operador) {
      case '+':
          resultado = parseFloat(this.numeroAnterior) + parseFloat(this.numeroActual);
          break;
      case '-':
          resultado = parseFloat(this.numeroAnterior) - parseFloat(this.numeroActual);
          break;
      case '*':
          resultado = parseFloat(this.numeroAnterior) * parseFloat(this.numeroActual);
          break;
      case '/':
          resultado = parseFloat(this.numeroAnterior) / parseFloat(this.numeroActual);
          break;
      default:
          break;
  }

  this.numeroActual = resultado.toString();
  this.actualizaPantalla(this.numeroActual);
  this.operador = '';
  this.numeroAnterior = '';
  this.calculoFinalizado = true;
}

//Función para actualizar la pantalla
actualizaPantalla(num: any) {
  let resultElement = document.getElementById('textoPantalla') as HTMLInputElement;
  resultElement.value = num;
}

//Función para borrar todo
borrarTodo() {
  this.numeroActual = '';
  this.numeroAnterior = '';
  this.operador = '';
  this.calculoFinalizado = false;
  this.actualizaPantalla('0');
}

//Función para insertar un decimal
insertaDecimal() {
  if (this.numeroActual.indexOf('.') === -1) {
      if (this.numeroActual === '') {
          this.numeroActual = '0';
      }
      this.numeroActual += '.';
      this.actualizaPantalla(this.numeroActual);
  }
}

}
