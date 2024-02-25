/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SkeletonTabComponent } from './skeleton-tab.component';

describe('SkeletonTabComponent', () => {
  let component: SkeletonTabComponent;
  let fixture: ComponentFixture<SkeletonTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
