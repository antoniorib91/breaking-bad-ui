import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { CharactersService } from './../../services/characters.service';
import { CharacterDetailDataComponent } from './character-detail-data.component';
import { ICharacter } from 'src/app/models/character.model';
import { By } from '@angular/platform-browser';
describe('CharacterDetailDataComponent', () => {
  let component: CharacterDetailDataComponent;
  let fixture: ComponentFixture<CharacterDetailDataComponent>;
  let service: CharactersService;
  let el: DebugElement;
  const characterMock: ICharacter = {
    char_id: 1, name: 'W', nickname: 'W',
    img: 'a', appearance: [1], birthday: '',
    better_call_saul_appearance: [], category: '',
    occupation: [''], portrayed: 'W', status: ''
  };
  beforeEach(async(() => {
    const charactersServiceStub = () => ({ getFormattedPortrayer: () => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CharacterDetailDataComponent],
      providers: [
        { provide: CharactersService, useFactory: charactersServiceStub }
      ]
    })
    .overrideComponent(
      CharacterDetailDataComponent, { set: { changeDetection: ChangeDetectionStrategy.Default }}
    )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailDataComponent);
    service = TestBed.inject(CharactersService);
    component = fixture.componentInstance;
    component.character = characterMock;
    el = fixture.debugElement.query(By.all());
    fixture.autoDetectChanges();
  });

  it('Should create component...', () => {
    expect(component).toBeTruthy();
  });

  describe('When create the component =>', () => {

    it('Should have a div with class "character-detail..."', () => {
      expect(el.name).toEqual('div');
      expect(el.classes['character-detail']).toBeTruthy();
    });

    it('Should have a image with character-detail-image...', () => {
      const imgEl = el.query(By.css('.character-detail-image'));
      expect(imgEl).not.toBeNull();
      expect(imgEl).not.toBeUndefined();
      expect(imgEl.name).toEqual('img');
      expect(imgEl.attributes.src).toEqual(characterMock.img);
    });

    it('Should have a app-label with a link inside...', () => {
      const appLabel = el.children[el.childNodes.length - 1];
      expect(appLabel.name).toEqual('app-label');
      expect(appLabel.children[0].name).toEqual('a');
      expect(appLabel.children[0].attributes.href).toContain('http://www.google.com/search?q=');
    });

  });

  describe('#getFormattedPortrayer =>', () => {

    it('Should call charactersService getFormattedPortrayer method...', () => {
      spyOn(service, 'getFormattedPortrayer').and.callThrough();
      component.getFormattedPortrayer();
      expect(service.getFormattedPortrayer).toHaveBeenCalled();
    });

  });
});
