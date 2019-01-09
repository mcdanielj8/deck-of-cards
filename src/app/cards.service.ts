import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CardsService {

  constructor(private http: HttpClient) { }
  getDeck(){
    return this.http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  }
  getCards(deckId){
    return this.http.get('https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=52');
  }
}