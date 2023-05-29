import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  //private debounceTimer?: NodeJS.Timeout = undefined
  
  constructor( private placesService: PlacesService ){

  }

  onQueryChanged(query: string){

    /* if (this.debounceTimer) {
      clearTimeout( this.debounceTimer )
    } */

    // Con el setTimeout ejecutamos una accion con retraso cada vez que presionamos una tecla
    setTimeout(() => {
      //console.log('Mandar el query: ', query );
      this.placesService.getPlacesResponseByQuery(query);
    }, 550);

  }

}
