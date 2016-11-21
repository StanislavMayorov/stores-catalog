import { Component, OnInit, Input } from '@angular/core';
import { Shop } from "../../shared/shop";
import { GoogleMapsGeocodingService } from "../../shared/google-maps-geocoding.service";
import { Marker } from "../../shared/marker";

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.sass'],
  providers: [GoogleMapsGeocodingService]
})
export class GoogleMapsComponent implements OnInit {
  @Input() shops: Array<Shop>;
  private markers: Array<Marker>;
  lat: number = 53.90453979999999;
  lng: number = 27.5615244;


  constructor(private googleMapsGeocodingService: GoogleMapsGeocodingService) {
  }

  ngOnInit() {
    this.markers = [];
    for (let shop of this.shops) {
      this.googleMapsGeocodingService.getGeocoding(shop.address)
        .subscribe((response: any) => {
          if (response.status === "OK"
            && response.results[0].geometry.location_type === "ROOFTOP") {
            let newMarker = new Marker(shop, response.results[0].geometry.location.lat,
              response.results[0].geometry.location.lng);
            this.markers.push(newMarker);
          }
        });
    }
  }

}
