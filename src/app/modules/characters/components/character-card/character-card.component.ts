import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ICharacter } from 'src/app/models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent implements OnInit {

  @Input()
  public character: ICharacter;

  constructor(
    private service: CharactersService
  ) { }

  ngOnInit(): void {}

  public handleCardClick() {
    this.service.selectCharacter(this.character.char_id);
  }

}
