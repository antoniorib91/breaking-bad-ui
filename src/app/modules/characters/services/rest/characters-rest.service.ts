import { environment } from './../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter } from 'src/app/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersRestService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllCharacters(): Observable<Array<ICharacter>> {
    return this.http.get<Array<ICharacter>>(`${environment.api}characters`);
  }

  public getCharacter(id: number): Observable<ICharacter> {
    return this.http.get<ICharacter>(`${environment.api}characters/${id}`);
  }
}
