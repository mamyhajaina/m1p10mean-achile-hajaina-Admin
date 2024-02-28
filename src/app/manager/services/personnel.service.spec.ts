/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonnelService } from './personnel.service';

describe('Service: Personnel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonnelService]
    });
  });

  it('should ...', inject([PersonnelService], (service: PersonnelService) => {
    expect(service).toBeTruthy();
  }));
});
