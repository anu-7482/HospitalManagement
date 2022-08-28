import { TestBed } from '@angular/core/testing';

import { PatientRegisistrationServiceService } from './patient-regisistration-service.service';

describe('PatientRegisistrationServiceService', () => {
  let service: PatientRegisistrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientRegisistrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
