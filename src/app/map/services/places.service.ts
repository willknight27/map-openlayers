import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlacesResponse } from '../interfaces/places.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  places: PlacesResponse[] = [];

  private apiUrl = `https://nominatim.openstreetmap.org/`;

  userLocation?: [number, number] | undefined;
  
  constructor( private http: HttpClient ) { }

  getPlacesResponseByQuery(query: string){
    const url = `${this.apiUrl}?addressdetails=1&q=${query}&format=json&limit=5`;
    return this.http.get<PlacesResponse[]>(url)
      .subscribe({
        next: (res) => {
          this.places = res
        },
        error: (error) => {
          console.log(error);
          
        }
      });
  }

  /* public async getUserLocation(): Promise<[number, number]>{

    return new Promise( (resolve, reject)=>{  
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [ coords.longitude, coords.latitude ]
          resolve(this.userLocation);

        },
        (error) => {
          alert('No se pudo obtener la geolocalización');
          console.log(error);
          reject();
          
        }
      );
    });
  } */

}
