import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  operador = '0';
  resultado = '0';

  addNum(num: string)
  {
    if(this.resultado != '0' && num != '00')
    {
      this.operador = num;
    }
    else if(((this.operador == '0' || this.operador == '') || this.resultado != '0') && num == '00')
    {
      this.operador = '0';
    }
    else if(this.operador == '0')
    {
      this.operador = num;
    }
    else
    {
      this.operador += num;
    }
    this.resultado = '0';
  }

  addOperador(op: string)
  {
    if(this.resultado != '0')
    {
      this.operador = this.resultado + op;
    }
    else
    {
      this.operador += op;
    }
    this.resultado = '0';
  }

  delete()
  {
    this.operador = this.operador.substring(0,this.operador.length-1);
  }

  evaluar()
  {
    this.resultado = eval(this.operador);
  }
}
