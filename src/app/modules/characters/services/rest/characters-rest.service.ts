import { environment } from './../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter } from 'src/app/models/character.model';
import { PaginationService } from 'src/app/services/pagination.service';
import { PaginationKey } from 'src/app/enums/pagination-key.enum';

@Injectable({
  providedIn: 'root'
})
export class CharactersRestService {

  constructor(
    private http: HttpClient,
    private pagination: PaginationService
  ) { }

  public getAllCharacters(): Observable<Array<ICharacter>> {
    return this.http.get<Array<ICharacter>>(`${environment.api}characters`);
  }

  public getCharacter(id: number): Observable<ICharacter> {
    return this.http.get<ICharacter>(`${environment.api}characters/${id}`);
  }

  public getAllCharactersPaginated() {
    const pag = this.getPagination();
    return this.http.get<Array<ICharacter>>(`${environment.api}characters?limit=${pag.limit}&offset=${pag.offset}`);
  }

  private getPagination() {
    if (!this.pagination.hasPagination(PaginationKey.CHARACTERS)) {
      this.pagination.createPagination(PaginationKey.CHARACTERS);
    }
    return this.getCurrentPaginationAndUpdate();
  }

  private getCurrentPaginationAndUpdate() {
    const currentPag = this.pagination.currentPagination(PaginationKey.CHARACTERS);
    const nextPag = this.pagination.getPaginatioObject(currentPag.limit,  currentPag.offset + 10, PaginationKey.CHARACTERS);
    this.pagination.updatePagination(nextPag);
    return currentPag;
  }

}
