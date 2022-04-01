export interface ICardContext {
  cardData: any;
  setCardDate: any;
  setCardPrincipal(cardPrincipal: string): void;
  cardPrincipal: string;
}