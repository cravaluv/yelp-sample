import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


@Injectable({
  providedIn: 'root',
})
export class GeolocationService {

  /*
      I've tried to use NativeGeocoder but got an error: 
      NativeGeocoder.reverseGeocode, but Cordova is not available. 
      Make sure to include cordova.js or run in a device/simulator
      I could use i.e. Google's API to get city by coords but I don't want to use
      any external API.
  **/

  constructor(private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) { }

  public getGeoLocation() {
    return this.geolocation.getCurrentPosition();
  }

}