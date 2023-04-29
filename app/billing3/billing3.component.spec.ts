import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Billing3Component } from './billing3.component';

describe('Billing3Component', () => {
  let component: Billing3Component;
  let fixture: ComponentFixture<Billing3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Billing3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Billing3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
