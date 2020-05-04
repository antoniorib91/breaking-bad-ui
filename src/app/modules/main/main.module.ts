import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { CharactersModule } from './../characters/characters.module';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    CharactersModule
  ]
})
export class MainModule { }
