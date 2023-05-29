import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

  constructor( private placesService: PlacesService ){}

  get placesRes() {
    return this.placesService.places;
  }

  goTo(){
    
  }

}
