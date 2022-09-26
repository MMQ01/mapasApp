import { Component, OnInit } from '@angular/core';
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Fullscreen ');
    const map = new mapboxgl.Map({
      container: 'mapa', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-75.61926259893016, 5.023571544851094], // starting position [lng, lat]
      zoom: 16, // starting zoom

      // projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
    });

  }

}
