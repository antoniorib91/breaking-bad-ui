import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailMobileComponent } from './character-detail-mobile.component';

describe('CharacterDetailMobileComponent', () => {
  let component: CharacterDetailMobileComponent;
  let fixture: ComponentFixture<CharacterDetailMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
