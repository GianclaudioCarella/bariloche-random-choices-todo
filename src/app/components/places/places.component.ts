import { Component, Input } from '@angular/core';
import { Place } from '../../models/place';

@Component({
  selector: 'places',
  templateUrl: './places.component.html',
  styleUrls: [ './places.component.css' ]
})
export class PlacesComponent  {
  @Input() name: string;

  cold: Place[];
  heat: Place[];
  sun: Place[];
  rain: Place[];

  GenerateColdPlaces()
  {
      this.cold.push(new Place
      ( "Cierro Catedral",
        "El cerro Catedral es una montaña ubicada en San Carlos de Bariloche, a 19 kilómetros del centro de la ciudad y dentro del Parque Nacional Nahuel Huapi, en Argentina. Es el centro de esquí más grande de Sudamérica y del Hemisferio Sur.",
        "https://www.google.com/search?q=cerro+catedral&oq=cierro+&aqs=chrome.1.69i57j0l5.2887j0j1&sourceid=chrome&ie=UTF-8"
      ));
  }

  GenerateHeatPlaces()
  {
      this.heat.push(new Place(
        "Playa Bonita",
        "Este balneario se encuentra por la Av. Ezequiel Bustillo con dirección sur en el kilómetro 8, a mano derecha. Se puede llegar con vehículo personal o con las líneas 20, 21 ó 10 de los buses urbanos.",
        "https://www.google.com/search?ei=Ey3KXKDJG6TZ5OUP9pSV2Ag&q=playa+Playa+bonita+bariloche&oq=playa+Playa+bonita+bariloche&gs_l=psy-ab.3..38l5.7366.8552..10296...0.0..0.328.1216.0j3j2j1......0....1..gws-wiz.9CtFPJGEdRU"
      ));
  }

  GenerateSunPlaces()
  {
      this.sun.push(new Place("C","D","E"));
  }

  GenerateRainPlaces()
  {
      this.rain.push(new Place("C","D","E"));
  }






}
