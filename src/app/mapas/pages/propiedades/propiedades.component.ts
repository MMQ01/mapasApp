import { Component, OnInit } from '@angular/core';

interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent {
  propiedades: Propiedad[] = [
    {
      titulo: 'Casa residencial, Canadá',
      descripcion: 'Bella propiedad en Katana, Canadá',
      lngLat: [ -75.92722289474008, 45.280015511264466]
    },
    {
      titulo: 'Casa de playa, México',
      descripcion: 'Hermosa casa de playa en Acapulco, México',
      lngLat: [ -99.91287720907991, 16.828940930185748]
    },
    {
      titulo: 'Apartamento, Argentina',
      descripcion: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
      lngLat: [ -58.430166677283445, -34.57150108832866 ]
    },
    {
      titulo: 'Casa Palestina',
      descripcion: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
      lngLat: [-75.61926259893016, 5.023571544851094]
    },
  ]
 
}
