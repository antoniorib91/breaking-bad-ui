import { ICharacter } from 'src/app/models/character.model';
import { CharactersService } from './../../services/characters.service';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement, ChangeDetectionStrategy } from '@angular/core';
import { CharacterCardComponent } from './character-card.component';
import { By } from '@angular/platform-browser';
describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let service: CharactersService;
  let fixture: ComponentFixture<CharacterCardComponent>;
  let el: DebugElement;
  const characterMock: ICharacter = {
    char_id: 1, name: 'W', nickname: 'W',
    img: '', appearance: [1], birthday: '',
    better_call_saul_appearance: [], category: '',
    occupation: [''], portrayed: '', status: ''
  };
  beforeEach(async(() => {
    const charactersServiceStub = () => ({ selectCharacter: char_id => ({}) });

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CharacterCardComponent],
      providers: [
        { provide: CharactersService, useFactory: charactersServiceStub }
      ]
    })
    .overrideComponent(
      CharacterCardComponent, { set: { changeDetection: ChangeDetectionStrategy.Default }}
    )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardComponent);
    service = TestBed.inject(CharactersService);
    component = fixture.componentInstance;
    component.character = characterMock;
    el = fixture.debugElement.query(By.all());
    fixture.detectChanges();
  });

  it('Should create the component...', () => {
    expect(component).toBeTruthy();
  });

  describe('When component was created =>', () => {

    it('Should have a class "character-card"...', () => {
      expect(el.classes['character-card']).toBeTruthy();
    });

    it('Should have a app-card component as child...', () => {
      expect(el.children[0].name).toEqual('app-card');
    });

    it('Should have a div with class "character-card-body" on app-card', () => {
      const bodyCardEl = el.children[0].query(By.css('.character-card-body'));
      expect(bodyCardEl).not.toBeUndefined();
      expect(bodyCardEl).not.toBeNull();
    });

    it('Should have a app-label component as child off div with character-card-body class...', () => {
      const bodyCardEl = el.children[0].query(By.css('.character-card-body'));
      const appLabel = bodyCardEl.children[0];
      expect(appLabel.name).toEqual('app-label');
      expect(appLabel.nativeElement.innerText).toEqual(characterMock.name);
    });

    it('Should have a img with class "character-card-img"', () => {
      const imgEl = el.children[0].query(By.css('.character-card-img'));
      expect(imgEl).not.toBeUndefined();
      expect(imgEl).not.toBeNull();
    });

  });

  describe('#handleCardClick =>', () => {

    it('Should call CharactersService "selectCharacter method..."', () => {
      spyOn(service, 'selectCharacter').and.callThrough();
      component.handleCardClick();
      expect(service.selectCharacter).toHaveBeenCalled();
      expect(service.selectCharacter).toHaveBeenCalledWith(characterMock.char_id);
    });

  });
});
