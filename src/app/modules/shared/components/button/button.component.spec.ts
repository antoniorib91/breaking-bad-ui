import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { DebugElement, ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let elDebug: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .overrideComponent(
      ButtonComponent, { set: { changeDetection: ChangeDetectionStrategy.Default }}
    )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    elDebug = fixture.debugElement.query(By.all());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When create the component =>', () => {

    describe('And no params are informed =>', () => {

      it('Should have css class breaking-bad-btn...', () => {
        expect(elDebug.classes['breaking-bad-btn']).toBeTruthy();
      });

      it('Should have class color "black"...', () => {
        expect(elDebug.classes.black).toBeTruthy();
      });

      it('Should have class size "small"...', () => {
        expect(elDebug.classes.black).toBeTruthy();
      });
    });

    describe('When params color is informed =>', () => {

      describe('And the color value is "green" =>', () => {

        beforeEach(() => {
          component.color = 'green';
          fixture.detectChanges();
        });

        it('Should have class color "green"...', () => {
          expect(elDebug.classes.green).toBeTruthy();
        });
      });

      describe('And the color value is "white" =>', () => {

        beforeEach(() => {
          component.color = 'white';
          fixture.detectChanges();
        });

        it('Should have class color "white"...', () => {
          expect(elDebug.classes.white).toBeTruthy();
        });
      });
    });

    describe('When params size is informed =>', () => {

      describe('And the size value is "medium" =>', () => {

        beforeEach(() => {
          component.size = 'medium';
          fixture.detectChanges();
        });

        it('Should have class size "medium"...', () => {
          expect(elDebug.classes.medium).toBeTruthy();
        });
      });

      describe('And the size value is "large" =>', () => {

        beforeEach(() => {
          component.size = 'large';
          fixture.detectChanges();
        });

        it('Should have class size "large"...', () => {
          expect(elDebug.classes.large).toBeTruthy();
        });
      });
    });
  });
});
