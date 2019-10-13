import { TestBed } from '@angular/core/testing';

import { ProductconnectService } from './productconnect.service';

describe('ProductconnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductconnectService = TestBed.get(ProductconnectService);
    expect(service).toBeTruthy();
  });
});
