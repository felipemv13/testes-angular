import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent {


  // CÓDIGO EXEMPLO INPUT
  currentItem = 'Television';



  // CÓDIGO EXEMPLO OUTPUT
  items =  []; //['item1', 'item2', 'item3', 'item4'];


  addItem(newItem: string) {
    this.items.push(newItem);
    this.botaoDesativado = this.items.length <= 0;
  }




  // CÓDIGO EXEMPLO COM ANGULAR MATERIAL
  envioMesaDesabilitado = true;
  botaoDesativado = undefined;

  validarBotaoEnviar(value: boolean) {
    this.envioMesaDesabilitado = value;
    this.botaoDesativado = value;
  }

}
