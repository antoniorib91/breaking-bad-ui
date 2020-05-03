import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LabelComponent } from './components/label/label.component';



@NgModule({
  declarations: [CardComponent, LabelComponent],
  exports: [CardComponent, LabelComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
