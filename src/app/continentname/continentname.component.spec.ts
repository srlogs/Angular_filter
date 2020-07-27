import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentnameComponent } from './continentname.component';

describe('ContinentnameComponent', () => {
  let component: ContinentnameComponent;
  let fixture: ComponentFixture<ContinentnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
