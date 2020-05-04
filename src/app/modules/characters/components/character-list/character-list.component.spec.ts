import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { CharactersRestService } from '../../services/rest/characters-rest.service';
import { CharactersService } from '../../services/characters.service';
import { CharacterListComponent } from './character-list.component';
import { By } from '@angular/platform-browser';
import { ICharacter } from 'src/app/models/character.model';
describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let service: CharactersService;
  let rest: CharactersRestService;
  let el: DebugElement;
  const characterMock: ICharacter = {
    char_id: 1, name: 'W', nickname: 'W',
    img: '', appearance: [1], birthday: '',
    better_call_saul_appearance: [], category: '',
    occupation: [''], portrayed: '', status: ''
  };

  beforeEach(async(() => {
    const charactersRestServiceStub = () => ({
      getAllCharactersPaginated: () => ({ subscribe: f => f({}) })
    });
    const charactersServiceStub = () => ({
      removeSubscription: subscription => ({}),
      setCharacters: response => ({}),
      addCharacters: response => ({}),
      getCharacters: () => ([characterMock])
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CharacterListComponent],
      providers: [
        { provide: CharactersRestService, useFactory: charactersRestServiceStub },
        { provide: CharactersService, useFactory: charactersServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    service = TestBed.inject(CharactersService);
    rest = TestBed.inject(CharactersRestService);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.all());
    fixture.detectChanges();
  });

  it('Should create...', () => {
    expect(component).toBeTruthy();
  });

  describe('When create the component =>', () => {

    it('Should have a div with "character-list" class...', () => {
      expect(el.name).toEqual('div');
      expect(el.classes['character-list']).toBeTruthy();
    });

    it('CharacterList should defaults get from service array...', () => {
      expect(component.characterList.length).toEqual(1);
    });

    it('Should have the same number of charaters and child app-character-card...', () => {
      expect(el.children.length).toEqual(1);
      expect(el.children[0].children[0].name).toEqual('app-character-card');
    });

    it('Should have a app-button...', () => {
      const btnDiv = fixture.debugElement.query(By.css('.character-list-more-btn'));
      expect(btnDiv).not.toBeNull();
      expect(btnDiv).not.toBeUndefined();
      expect(btnDiv.children[0].name).toEqual('app-button');
    });

  });

  describe('#handleMoreButtonClick =>', () => {

    it('Should call charactersService addCharacters method...', () => {
      spyOn(service, 'addCharacters').and.callThrough();
      component.handleMoreButtonClick();
      expect(service.addCharacters).toHaveBeenCalled();
    });

  });

  describe('#ngOnInit =>', () => {

    it('Should call charactersRestService getAllCharactersPaginated method...', () => {
      spyOn(rest, 'getAllCharactersPaginated').and.callThrough();
      component.ngOnInit();
      expect(rest.getAllCharactersPaginated).toHaveBeenCalled();
    });

  });

  describe('#ngOnDestroy =>', () => {

    it('Should call charactersService removeSubscription method...', () => {
      spyOn(service, 'removeSubscription').and.callThrough();
      component.ngOnDestroy();
      expect(service.removeSubscription).toHaveBeenCalled();
    });

  });
});
