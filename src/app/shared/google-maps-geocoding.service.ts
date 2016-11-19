import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class GoogleMapsGeocodingService {
  private apiKey = 'AIzaSyAGb1MTX-euG06undWOO9WrTujXSd9SJMI';

  constructor(private http: Http) {
  }

  getGeocoding(address: string): Observable<Response> {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.encodeAddress(address)}&key=${this.apiKey}`;
    return this.http.get(url).map((response:Response) => response.json())
  }

  private encodeAddress(address: string): string {
    return encodeURIComponent(address.replace(/\s/ig, '+'));
  }



}
