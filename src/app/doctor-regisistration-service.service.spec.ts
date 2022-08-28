import { TestBed } from '@angular/core/testing';

import { DoctorRegisistrationServiceService } from './doctor-regisistration-service.service';

describe('DoctorRegisistrationServiceService', () => {
  let service: DoctorRegisistrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorRegisistrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
