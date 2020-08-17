import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftmidComponent } from './leftmid.component';

describe('LeftmidComponent', () => {
  let component: LeftmidComponent;
  let fixture: ComponentFixture<LeftmidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftmidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftmidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
