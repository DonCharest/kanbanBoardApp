import { TestBed, inject } from '@angular/core/testing';

import { DataProviderService } from './data-provider.service';

describe('DataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataProviderService]
    });
  });

  it('should ...', inject(
    [DataProviderService],
    (service: DataProviderService) => {
      expect(service).toBeTruthy();
    }
  ));
});
