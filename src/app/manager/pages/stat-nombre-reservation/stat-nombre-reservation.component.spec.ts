/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatNombreReservationComponent } from './stat-nombre-reservation.component';

describe('StatNombreReservationComponent', () => {
  let component: StatNombreReservationComponent;
  let fixture: ComponentFixture<StatNombreReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatNombreReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatNombreReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
