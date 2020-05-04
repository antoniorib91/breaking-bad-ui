import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LabelComponent } from './components/label/label.component';
import { TitleComponent } from './components/title/title.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    CardComponent,
    LabelComponent,
    TitleComponent,
    ButtonComponent
  ],
  exports: [
    CardComponent,
    LabelComponent,
    TitleComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
