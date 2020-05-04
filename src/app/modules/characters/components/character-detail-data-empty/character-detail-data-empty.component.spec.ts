import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailDataEmptyComponent } from './character-detail-data-empty.component';

describe('CharacterDetailDataEmptyComponent', () => {
  let component: CharacterDetailDataEmptyComponent;
  let fixture: ComponentFixture<CharacterDetailDataEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailDataEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailDataEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
