import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ICharacter } from 'src/app/models/character.model';
import { Subscription } from 'rxjs';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-detail-mobile',
  templateUrl: './character-detail-mobile.component.html',
  styleUrls: ['./character-detail-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailMobileComponent implements OnInit, OnDestroy {

  public selected: ICharacter;

  public subscription: Subscription;

  public visible = false;

  constructor(
    private service: CharactersService
  ) {}

  ngOnInit(): void {
    this.initCharacterDetail();
  }

  ngOnDestroy(): void {
    this.service.removeSubscription(this.subscription);
  }

  public initCharacterDetail() {
    this.subscription = this.service.getSelected().subscribe(
      res => this.selected = res,
      err => console.log(err)
    );
  }

  public handleButtonClick() {
    this.visible = !this.visible;
  }

}
