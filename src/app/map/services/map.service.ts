import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map!: Map

  constructor() {

    this.map = new Map({

      target: 'map',

      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],

      view: new View({
        center: [0, 0],
        zoom: 2, maxZoom: 18,
        constrainResolution: true,


      }),

      controls: defaultControls().extend([
        new Attribution(),
        new FullScreen()
      ])

    });

    // ADd point
    const latitude = -33.029362; // Latitud del punto
    const longitude = -71.559535; // Longitud del punto

    const point = new Feature({
      geometry: new Point(fromLonLat([longitude, latitude])),
    });

    const iconStyle = new Style({
      image: new Icon({
        src: '/assets/icon/location-pin.png', // Ruta al archivo de icono que deseas utilizar
        scale: 0.1
      }),
    });

    point.setStyle(iconStyle);

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [point],
      }),
    });

    this.map.addLayer(vectorLayer);


    // Zoom hacia un punto especifico
    /* zoomToPoint() {
      const latitude = -33.029362; // Latitud del punto
      const longitude = -71.559535; // Longitud del punto
      const zoomLevel = 10; // Nivel de zoom deseado
      const duration = 1000; // Duracion de la animacion

      const view = this.map.getView(); */

      /* view.setCenter(fromLonLat([longitude, latitude]));
      view.setZoom(zoomLevel); */

/*       const center = fromLonLat([longitude, latitude]);

      view.animate({
        center: center,
        zoom: zoomLevel,
        duration: duration,
      });
    }
 */

  }
}
