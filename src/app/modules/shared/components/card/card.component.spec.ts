import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';
describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let elDebug: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CardComponent]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    elDebug = fixture.debugElement.query(By.css('.card'));
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When create the component =>', () => {
    it('Should have css class card-breaking-bad...', () => {
      expect(elDebug.classes['card-breaking-bad']).toBeTruthy();
    });

    it('Should contains two divs inside...', () => {
      elDebug.children.map(v => expect(v.name).toEqual('div'));
      expect(elDebug.children.length).toBe(2);
    });

    it('Should contains class card-body on first child...', () => {
      expect(elDebug.children[0].classes['card-body']).toBeTruthy();
    });

    it('Should contains class card-footer on second child...', () => {
      expect(elDebug.children[1].classes['card-footer']).toBeTruthy();
    });
  });
});
