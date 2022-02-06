import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // CÓDIGO EXEMPLO INPUT
  currentItem = 'Television';


  // CÓDIGO EXEMPLO OUTPUT
  items =  []; //['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);

    this.botaoDesativado = this.items.length <= 0;
  }

  botaoDesativado = true;
  ativarDesativar(value: boolean) {
    console.log(value);
    this.botaoDesativado = this.items.length > 0;
  }
}
