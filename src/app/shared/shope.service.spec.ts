/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShopService } from './shope.service';

describe('Service: Shope', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopService]
    });
  });

  it('should ...', inject([ShopService], (service: ShopService) => {
    expect(service).toBeTruthy();
  }));
});
