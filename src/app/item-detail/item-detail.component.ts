import { Output, EventEmitter, Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {

  // CÓDIGO EXEMPLO INPUT
  @Input()
  item = '';


  // CÓDIGO EXEMPLO OUTPUT
  @Output()
  newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }


  ativarDesativarCancelar() {
    // implementar lógica de desativar/ativar cancelar
  }
}
