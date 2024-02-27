/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatTempsMoyenTravailComponent } from './stat-temps-moyen-travail.component';

describe('StatTempsMoyenTravailComponent', () => {
  let component: StatTempsMoyenTravailComponent;
  let fixture: ComponentFixture<StatTempsMoyenTravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatTempsMoyenTravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatTempsMoyenTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
