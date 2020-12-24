import { TestBed } from '@angular/core/testing';

import { HomeserviceService } from './home-service.service';

describe('HomeserviceService', () => {
  let service: HomeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
