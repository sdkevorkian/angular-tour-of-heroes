import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageSVC: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // to do - send message after fetching
    this.messageSVC.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
