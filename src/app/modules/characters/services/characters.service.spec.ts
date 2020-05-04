import { Subscription } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';
import { ICharacter } from 'src/app/models/character.model';

describe('CharactersService', () => {
  let service: CharactersService;
  let subscription: Subscription;
  let subsInjected: Subscription;
  const characterMock: ICharacter = {
    char_id: 1, name: 'W', nickname: 'W',
    img: '', appearance: [1], birthday: '',
    better_call_saul_appearance: [], category: '',
    occupation: [''], portrayed: 'AAA', status: ''
  };
  const subscriptionStub = () => ({ closed: false, unsubscribe: () => ({}) });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CharactersService,
        { provide: Subscription, useFactory: subscriptionStub }
      ]
    });
    service = TestBed.inject(CharactersService);
    subsInjected = TestBed.inject(Subscription);
    service.setCharacters([characterMock]);
  });

  afterEach(() => {
    if (subscription && !subscription.closed) {
      subscription.unsubscribe();
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#selectCharacter =>', () => {

    it('Should populate next seleted...', () => {
      service.selectCharacter(characterMock.char_id);
      subscription = service.getSelected().subscribe(
        res => expect(res.char_id).toEqual(characterMock.char_id),
      );
    });

  });

  describe('#getSelected =>', () => {

    beforeEach(() => {
      service.selectCharacter(characterMock.char_id);
    });

    it('Should return the last selected character...', () => {
      subscription = service.getSelected().subscribe(
        res => expect(res.char_id).toEqual(characterMock.char_id),
      );
    });
  });

  describe('#getCharacters =>', () => {

    it('Should return all characters...', () => {
      expect(service.getCharacters().length).toEqual(1);
    });

  });

  describe('#addCharacters =>', () => {

    it('Should concat the received value in the characters list...', () => {
      const anotherChar = characterMock;
      anotherChar.char_id = 2;
      service.addCharacters([anotherChar]);
      expect(service.getCharacters().length).toEqual(2);
    });

  });

  describe('#getFormattedPortrayer =>', () => {

    describe('When value not includes "&"', () => {

      beforeEach(() => {
        service.setCharacters([characterMock]);
      });

      it('should not format portrayer...', () => {
        expect(service.getFormattedPortrayer()).toEqual('');      });
      });

  });

  describe('When includes "&"', () => {

    beforeEach(() => {
      const anotherChar = characterMock;
      anotherChar.char_id = 3;
      anotherChar.portrayed = 'JJ & AJ';
      service.addCharacters([anotherChar]);
    });

    it('Should format portrayer with "and"..', () => {
      service.selectCharacter(3);
      expect(service.getFormattedPortrayer()).toEqual('JJ and AJ');
    });

  });

  describe('#removeSubscription =>', () => {

    it('Should call the Subscription method unsubcribe...', () => {
      spyOn(subsInjected, 'unsubscribe').and.callThrough();
      service.removeSubscription(subsInjected);
      expect(subsInjected.unsubscribe).toHaveBeenCalled();
    });

  });
});
