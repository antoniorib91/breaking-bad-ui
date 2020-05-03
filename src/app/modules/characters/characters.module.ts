import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { SharedModule } from '../shared/shared.module';
import { CharactersService } from './services/characters.service';



@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent,
    CharacterCardComponent
  ],
  exports: [
    CharacterListComponent,
    CharacterDetailComponent
  ],
  providers: [
    CharactersService
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CharactersModule { }
