import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailDataComponent } from './character-detail-data.component';

describe('CharacterDetailDataComponent', () => {
  let component: CharacterDetailDataComponent;
  let fixture: ComponentFixture<CharacterDetailDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
