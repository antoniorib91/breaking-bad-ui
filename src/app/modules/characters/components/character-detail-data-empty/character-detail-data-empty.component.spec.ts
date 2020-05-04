import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailDataEmptyComponent } from './character-detail-data-empty.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CharacterDetailDataEmptyComponent', () => {
  let component: CharacterDetailDataEmptyComponent;
  let fixture: ComponentFixture<CharacterDetailDataEmptyComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ CharacterDetailDataEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailDataEmptyComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.all());
  });

  it('Should create...', () => {
    expect(component).toBeTruthy();
  });

  describe('When create the compoennt =>', () => {

    it('Should have a div with "character-detail" class', () => {
      expect(el.classes['character-detail']).toBeTruthy();
    });

    it('Should have a class "message"', () => {
      expect(el.classes.message).toBeTruthy();
    });

    it('Should have a img with class "message-image"...', () => {
      expect(el.children[0]).not.toBeNull();
      expect(el.children[0]).not.toBeUndefined();
      expect(el.children[0].name).toEqual('img');
      expect(el.children[0].classes['message-image']).toBeTruthy();
    });

    it('Should have a app-label with the text: "Select a character to see more details."', () => {
      const value = 'Select a character to see more details.';
      expect(el.children[1].name).toEqual('app-label');
      expect(el.children[1].nativeElement.innerText).toEqual(value);
    });

  });

});
