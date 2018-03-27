import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageSVC: MessageService) { }

    // to do - send message after fetching each
  getHeroes(): Observable<Hero[]> {
    this.messageSVC.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id): Observable<Hero> {
    this.messageSVC.add(`HeroService: fetched id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
