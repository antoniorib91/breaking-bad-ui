import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { CharacterDetailComponent } from './character-detail.component';
import { By } from '@angular/platform-browser';
import { ICharacter } from 'src/app/models/character.model';
describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;
  let service: CharactersService;
  let el: DebugElement;
  const characterMock: ICharacter = {
    char_id: 1, name: 'W', nickname: 'W',
    img: '', appearance: [1], birthday: '',
    better_call_saul_appearance: [], category: '',
    occupation: [''], portrayed: '', status: ''
  };
  beforeEach(async(() => {
    const charactersServiceStub = () => ({
      removeSubscription: subscription => ({}),
      getSelected: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CharacterDetailComponent],
      providers: [
        { provide: CharactersService, useFactory: charactersServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponent);
    service = TestBed.inject(CharactersService);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.all());
    fixture.autoDetectChanges();
  });


  it('Should create the component...', () => {
    expect(component).toBeTruthy();
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
});
