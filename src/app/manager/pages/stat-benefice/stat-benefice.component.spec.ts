/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatBeneficeComponent } from './stat-benefice.component';

describe('StatBeneficeComponent', () => {
  let component: StatBeneficeComponent;
  let fixture: ComponentFixture<StatBeneficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatBeneficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatBeneficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
