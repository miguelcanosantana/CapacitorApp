import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/core';


@Component({
  selector: 'app-geo-tab',
  templateUrl: './geo-tab.page.html',
  styleUrls: ['./geo-tab.page.scss'],
})


export class GeoTabPage implements OnInit {

  //Variables
  latitud: number;
  longitud: number;
  altitud: number;
  velocidad: number;


  constructor() {}
  
  
  ngOnInit() {}


  //Refrescar Ubicación cada vez que se entre a la pestaña
  ionViewDidEnter() {
    this.getUbicacion();
  }


  async getUbicacion() {

    const position = await Geolocation.getCurrentPosition();

    this.latitud = position.coords.latitude;
    this.longitud = position.coords.longitude;
    this.altitud = position.coords.altitude;
    this.velocidad = position.coords.speed;
  }

}
