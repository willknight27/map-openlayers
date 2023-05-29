import { Component, AfterViewInit } from '@angular/core';
import Map from 'ol/Map';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { defaults as defaultControls } from 'ol/control';
import Attribution from 'ol/control/Attribution';
import FullScreen from 'ol/control/FullScreen';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { MapService } from '../../services/map.service';




@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {

  map!: Map

  constructor(private mapService: MapService) {
    this.mapService
  }


  ngAfterViewInit(): void {

    this.mapService.createMap('map');

    // ADd point
    const latitude = -33.029362; // Latitud del punto
    const longitude = -71.559535; // Longitud del punto
    const iconPath = '/assets/icon/location-pin.png'; // Ruta al archivo de icono que deseas utilizar
    const scale = 0.1; // Escala del icono

    this.mapService.addPoint(latitude, longitude, iconPath, scale)
  };

  // Zoom hacia un punto especifico
  zoomToPoint() {
    const latitude = -33.029362; // Latitud del punto
    const longitude = -71.559535; // Longitud del punto
    const zoomLevel = 15; // Nivel de zoom deseado
    const duration = 1000; // Duracion de la animacion

    this.mapService.zoomToPoint(latitude, longitude, zoomLevel, duration);

  }

  zoomOut() {
    // Llama al método del servicio MapService para realizar el zoom out en el mapa
    this.mapService.zoomOut();
  }
}