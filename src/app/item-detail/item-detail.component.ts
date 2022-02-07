import { Output, EventEmitter, Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {

checked="true";

  // CÓDIGO EXEMPLO INPUT
  @Input()
  item = '';


  // CÓDIGO EXEMPLO OUTPUT
  @Output()
  newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }




  // CÓDIGO EXEMPLO COM ANGULAR MATERIAL
  primeiroCheckbox = false;
  segundoCheckbox = false;

  @Output() avisoBotaoCancelar = new EventEmitter<boolean>();

  avisarBotaoCancelar(evento){
    console.log('primeiroCheckbox',this.primeiroCheckbox);
    // console.log('segundoCheckbox', this.segundoCheckbox);
    this.avisoBotaoCancelar.emit(this.primeiroCheckbox);
  }


}
