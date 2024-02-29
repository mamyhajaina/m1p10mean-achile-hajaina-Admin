/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SkeletonStatistiqueComponent } from './skeleton-statistique.component';

describe('SkeletonStatistiqueComponent', () => {
  let component: SkeletonStatistiqueComponent;
  let fixture: ComponentFixture<SkeletonStatistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonStatistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
