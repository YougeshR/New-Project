import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Billing2Component } from './billing2.component';

describe('Billing2Component', () => {
  let component: Billing2Component;
  let fixture: ComponentFixture<Billing2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Billing2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Billing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
