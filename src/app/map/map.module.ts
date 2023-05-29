import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './pages/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchResultComponent } from './components/search-result/search-result.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    SearchInputComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent,
  ]
})
export class MapModule { }
