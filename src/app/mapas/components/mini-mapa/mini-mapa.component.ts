import { Component, OnInit, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styleUrls: ['./mini-mapa.component.css']
})
export class MiniMapaComponent implements OnInit, AfterViewInit {

  @Input() lngLat: [number,number]=[0,0]
  @ViewChild('mapa') divMapa!: ElementRef

  constructor() { }


  ngAfterViewInit(): void {
     const mapa= new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive:false
      // projection: 'globe' // display the map as a 3D globe
    });

    new mapboxgl.Marker()
    .setLngLat(this.lngLat)
    .addTo(mapa)
  }

  ngOnInit(): void {
  }

}
