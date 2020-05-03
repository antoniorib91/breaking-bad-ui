import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { CharactersModule } from './../characters/characters.module';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    CharactersModule
  ]
})
export class MainModule { }
