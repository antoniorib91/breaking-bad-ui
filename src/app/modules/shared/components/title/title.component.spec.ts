import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;
  let elDebug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    })
    .overrideComponent(
      TitleComponent, { set: { changeDetection: ChangeDetectionStrategy.Default }}
    )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    elDebug = fixture.debugElement.query(By.all());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When create the component =>', () => {

    describe('And no params are informed =>', () => {

      it('Should have css class breaking-bad-title...', () => {
        expect(elDebug.classes['breaking-bad-title']).toBeTruthy();
      });

      it('Should have class color "black"...', () => {
        expect(elDebug.classes.black).toBeTruthy();
      });

      it('Should have class size "small"...', () => {
        expect(elDebug.classes.black).toBeTruthy();
      });

      it('Should have class fontStyle "normal"...', () => {
        expect(elDebug.classes.normal).toBeTruthy();
      });

      it('Should have class align "center"...', () => {
        expect(elDebug.classes.center).toBeTruthy();
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

    describe('When params fontStyle is informed =>', () => {

      describe('And the fontStyle value is "bold" =>', () => {

        beforeEach(() => {
          component.fontStyle = 'bold';
          fixture.detectChanges();
        });

        it('Should have class fontStyle "bold"...', () => {
          expect(elDebug.classes.bold).toBeTruthy();
        });
      });

    });

    describe('When params align is informed =>', () => {

      describe('And the align value is "left" =>', () => {

        beforeEach(() => {
          component.align = 'left';
          fixture.detectChanges();
        });

        it('Should have class align "left"...', () => {
          expect(elDebug.classes.left).toBeTruthy();
        });
      });

      describe('And the align value is "right" =>', () => {

        beforeEach(() => {
          component.align = 'right';
          fixture.detectChanges();
        });

        it('Should have class align "right"...', () => {
          expect(elDebug.classes.right).toBeTruthy();
        });
      });

    });
  });
});
