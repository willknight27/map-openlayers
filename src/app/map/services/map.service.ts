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

import XYZ from 'ol/source/XYZ';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map!: Map;
  private view!: View;

  constructor() {

  }

  createMap(target: string): void {
    this.map = new Map({

      target: target,
      
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      
      view: new View({
        center: fromLonLat([-71.537450, -35.675147]), // Coordenadas del centro del mapa (Chile)
        zoom: 6,
        maxZoom: 18,
        constrainResolution: true,
      }),
      controls: defaultControls().extend([
        new Attribution(),
        new FullScreen()
      ])
    });
  }

  addPoint(latitude: number, longitude: number, iconPath: string, scale: number): void {
    const point = new Feature({
      geometry: new Point(fromLonLat([longitude, latitude])),
    });

    const iconStyle = new Style({
      image: new Icon({
        src: iconPath,
        scale: scale
      }),
    });

    point.setStyle(iconStyle);

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [point],
      }),
    });

    this.map.addLayer(vectorLayer);
  }

  zoomToPoint(latitude: number, longitude: number, zoomLevel: number, duration: number): void {
    const view = this.map.getView();
    const center = fromLonLat([longitude, latitude]);

    view.animate({
      center: center,
      zoom: zoomLevel,
      duration: duration,
    });
  }

  zoomOut() {
    // Realiza el zoom out en el mapa
    // Realiza el zoom out en el mapa con animación fluida
        // Realiza el zoom out en el mapa con animación fluida
    this.view = this.map.getView();
    this.view.fit(this.view.getProjection().getExtent(), {
      duration: 1000
    });
  }
}
