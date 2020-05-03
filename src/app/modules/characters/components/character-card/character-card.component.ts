import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ICharacter } from 'src/app/models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent implements OnInit {

  @Input()
  public character: ICharacter;

  constructor() { }

  ngOnInit(): void {}

}
