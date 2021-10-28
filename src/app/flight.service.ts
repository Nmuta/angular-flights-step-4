import { Injectable } from '@angular/core';
import { Flight } from './flights/flight.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

 

  constructor() { }

  getFlights(): Flight[] {
    const data =  [
      {origin: "Denver", destination: "Miami", flightNumber: 5, 
      depart: new Date(), arrive: new Date(), nonstop: true},
      {origin: "Phoenix", destination: "NYC", flightNumber: 5, 
      depart: new Date(), arrive: new Date(), nonstop: true, snacks: "samosas"},
    ];

    return data;
  }
}
