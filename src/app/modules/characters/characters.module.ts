import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { SharedModule } from '../shared/shared.module';
import { CharactersService } from './services/characters.service';
import { CharacterDetailMobileComponent } from './components/character-detail-mobile/character-detail-mobile.component';
import { CharacterDetailDataComponent } from './components/character-detail-data/character-detail-data.component';
import { CharacterDetailDataEmptyComponent } from './components/character-detail-data-empty/character-detail-data-empty.component';



@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent,
    CharacterCardComponent,
    CharacterDetailMobileComponent,
    CharacterDetailDataComponent,
    CharacterDetailDataEmptyComponent
  ],
  exports: [
    CharacterListComponent,
    CharacterDetailComponent,
    CharacterDetailMobileComponent
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
