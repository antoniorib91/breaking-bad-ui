import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharactersRestService } from '../../services/rest/characters-rest.service';
import { ICharacter } from 'src/app/models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {

  public characterList = [];

  private subscription: Subscription;

  constructor(
    private restService: CharactersRestService
  ) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  ngOnDestroy(): void {
   this.removeSubscription();
  }

  private getAllCharacters(): void {
    this.subscription = this.restService.getAllCharacters().subscribe(
      res => this.handleResponse(res),
      err => console.log(err)
    );
  }

  private handleResponse(response: Array<ICharacter>) {
    this.characterList = response;
  }

  private removeSubscription(): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

}
