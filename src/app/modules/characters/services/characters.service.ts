import { Injectable } from '@angular/core';
import { ICharacter } from 'src/app/models/character.model';
import { Subject, Observable, Subscription } from 'rxjs';

@Injectable()
export class CharactersService {

  private characters: Array<ICharacter> = [];
  private selected: ICharacter;

  private selectedSubject: Subject<ICharacter> = new Subject();

  constructor() { }

  public selectCharacter(id: number): void {
    this.selected = this.characters.find(char => char.char_id === id);
    this.selectedSubject.next(this.selected);
  }

  public getSelected(): Observable<ICharacter> {
    return this.selectedSubject;
  }

  public getCharacters(): Array<ICharacter> {
    return this.characters;
  }

  public setCharacters(values: Array<ICharacter>): void {
    this.characters = values;
  }

  public addCharacters(values: Array<ICharacter>): void {
    this.characters = this.characters.concat(values);
  }

  public getFormattedPortrayer() {
    return this.selected ? this.formatPortrayer(this.selected.portrayed) : '';
  }

  public removeSubscription(subscription: Subscription): void {
    if (subscription && !subscription.closed) {
      subscription.unsubscribe();
    }
  }

  private formatPortrayer(value: string) {
    value = value.trim();
    return value.includes('&') ? value.replace('&', 'and') : value;
  }
}
