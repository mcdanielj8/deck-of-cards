import { Component } from '@angular/core';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CardsService]
})
export class AppComponent {
  public cards: Array<any> = [];
  public deckId: string = '';
  constructor(
    public cardsService: CardsService
    ){}

  ngOnInit(){
    this.getNewDeck();
  }

  getNewDeck(){
    this.cardsService.getDeck()
    .subscribe((data) => {
      this.deckId = data['deck_id'];
      this.drawCards();
    })
  }

  drawCards(){
    this.cardsService.getCards(this.deckId)
    .subscribe((data) => {
      this.cards = data['cards']
    });
  }
  alertCard(){
    alert('You clicked a card');
  }
}

//write components for filter, etc as directives
