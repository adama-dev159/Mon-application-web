import { TestBed } from '@angular/core/testing';

import { InfoDemande } from './info-demande';

describe('InfoDemande', () => {
  let service: InfoDemande;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoDemande);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
