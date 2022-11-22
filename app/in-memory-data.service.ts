import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', points: 51 },
      { id: 13, name: 'Bombasto', points: 52 },
      { id: 14, name: 'Celeritas', points: 53 },
      { id: 15, name: 'Magneta', points: 54 },
      { id: 16, name: 'RubberMan', points: 55 },
      { id: 17, name: 'Dynama', points: 56 },
      { id: 18, name: 'Dr. IQ', points: 57 },
      { id: 19, name: 'Magma', points: 58 },
      { id: 20, name: 'Tornado', points: 59 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}