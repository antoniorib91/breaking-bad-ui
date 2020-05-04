import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ICharacter } from 'src/app/models/character.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {

  public selected: ICharacter;

  public subscription: Subscription;

  constructor(
    private service: CharactersService
  ) { }

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



}
