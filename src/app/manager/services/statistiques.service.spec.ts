/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StatistiquesService } from './statistiques.service';

describe('Service: Statistiques', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatistiquesService]
    });
  });

  it('should ...', inject([StatistiquesService], (service: StatistiquesService) => {
    expect(service).toBeTruthy();
  }));
});
