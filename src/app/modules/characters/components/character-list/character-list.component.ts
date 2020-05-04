import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharactersRestService } from '../../services/rest/characters-rest.service';
import { ICharacter } from 'src/app/models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {

  public characterList = [];
  private subscription: Subscription;

  constructor(
    private service: CharactersService,
    private restService: CharactersRestService,
  ) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  ngOnDestroy(): void {
   this.service.removeSubscription(this.subscription);
  }

  public handleMoreButtonClick() {
    this.getAllCharacters();
  }

  private getAllCharacters(): void {
    this.subscription = this.restService.getAllCharactersPaginated().subscribe(
      res => this.handleResponse(res),
      err => console.log(err)
    );
  }

  private handleResponse(response: Array<ICharacter>) {
    // this.characterList.push(response);
    if (this.characterList.length === 0) {
      this.service.setCharacters(response);
    } else {
      this.service.addCharacters(response);
    }
    this.characterList = this.service.getCharacters();
  }


}
