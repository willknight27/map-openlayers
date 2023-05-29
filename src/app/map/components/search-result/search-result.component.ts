import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

  constructor(
    private placesService: PlacesService,
    private mapService: MapService

    ){}

  get placesRes() {
    return this.placesService.places;
  }

  goTo(lat:number, long: number){
    this.mapService.zoomToPoint(lat, long, 15, 1000);
    this.mapService.addPoint(lat,long, '/assets/icon/location-pin.png', 0.1)
  }



}
