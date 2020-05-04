import { TestBed } from '@angular/core/testing';

import { CharactersRestService } from './characters-rest.service';
import { HttpClient } from '@angular/common/http';

describe('CharactersRestService', () => {
  let service: CharactersRestService;
  let httpClient: HttpClient;

  const HttpClientStub = () => ({ get: () => ({}), post: () => ({}) });
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CharactersRestService,
        { provide: HttpClient, useFactory: HttpClientStub }
      ]
    });
    service = TestBed.inject(CharactersRestService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
