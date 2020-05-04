import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { By } from '@angular/platform-browser';
import { ICharacter } from 'src/app/models/character.model';

import { CharacterDetailMobileComponent } from './character-detail-mobile.component';

describe('CharacterDetailMobileComponent', () => {
  let component: CharacterDetailMobileComponent;
  let fixture: ComponentFixture<CharacterDetailMobileComponent>;
  let service: CharactersService;
  let el: DebugElement;
  const characterMock: ICharacter = {
    char_id: 1, name: 'W', nickname: 'W',
    img: '', appearance: [1], birthday: '',
    better_call_saul_appearance: [], category: '',
    occupation: [''], portrayed: '', status: ''
  };

  const charactersServiceStub = () => ({
    removeSubscription: subscription => ({}),
    getSelected: () => ({ subscribe: f => f({}) })
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ CharacterDetailMobileComponent ],
      providers: [
        { provide: CharactersService, useFactory: charactersServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailMobileComponent);
    service = TestBed.inject(CharactersService);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.all());
    fixture.detectChanges();
  });

  it('Should create the component...', () => {
    expect(component).toBeTruthy();
  });

  describe('When create the component =>', () => {

    it('Should have a div with the class "character-detail-mobile"...', () => {
      expect(el.name).toEqual('div');
      expect(el.classes['character-detail-mobile']).toBeTruthy();
    });

    it('Should have a child div with the class "character-detail-content"', () => {
      expect(el.children[0].classes['character-detail-content']).toBeTruthy();
    });

  });

  describe('When have a selected character =>', () => {

    beforeEach(() => {
      component.selected = characterMock;
    });

    it('Should have an app-character-detail-data component...', () => {
      const componentDetailData = el.children[0].children[0];
      expect(componentDetailData.name).toEqual('app-character-detail-data');
    });

  });

  describe('When dont have selected character =>', () => {

    beforeEach(() => {
      component.selected = null;
      fixture.detectChanges();
    });

    it('Should have an app-character-detail-data-empty component...', () => {
      const componentDetailDataEmpty = el.children[0].children[0];
      expect(componentDetailDataEmpty.name).toEqual('app-character-detail-data-empty');
    });

  });

  describe('#ngOnDestroy =>', () => {

    it('Should calls characterService removeSubscription method...', () => {
      spyOn(service, 'removeSubscription').and.callThrough();
      component.ngOnDestroy();
      expect(service.removeSubscription).toHaveBeenCalled();
    });

  });

  describe('#initCharacterDetail =>', () => {

    it('Should calls characterService getSelected method...', () => {
      spyOn(service, 'getSelected').and.callThrough();
      component.ngOnInit();
      expect(service.getSelected).toHaveBeenCalled();
    });

  });

  describe('#handleButtonClick =>', () => {

    it('Should change visible status...', () => {
      component.handleButtonClick();
      expect(component.visible).toBeTruthy();
    });
  });
});
