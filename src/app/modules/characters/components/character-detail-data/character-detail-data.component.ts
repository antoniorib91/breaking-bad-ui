import { CharactersService } from './../../services/characters.service';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ICharacter } from 'src/app/models/character.model';

@Component({
  selector: 'app-character-detail-data',
  templateUrl: './character-detail-data.component.html',
  styleUrls: ['./character-detail-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailDataComponent implements OnInit {

  @Input()
  public character: ICharacter;

  constructor(
    private service: CharactersService
  ) { }

  ngOnInit(): void {}

  public getFormattedPortrayer() {
    return this.service.getFormattedPortrayer();
  }

}
