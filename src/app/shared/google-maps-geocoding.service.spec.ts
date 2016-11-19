/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleMapsGeocodingService } from './google-maps-geocoding.service';

describe('Service: GoogleMapsGeocoding', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleMapsGeocodingService]
    });
  });

  it('should ...', inject([GoogleMapsGeocodingService], (service: GoogleMapsGeocodingService) => {
    expect(service).toBeTruthy();
  }));
});
