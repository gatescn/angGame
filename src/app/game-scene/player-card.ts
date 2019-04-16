import{ CardTypes } from './card-types.enum';

export class PlayerCard {
  CardOwner: String = "";
  CardType: CardTypes = CardTypes.None;
  RowSize: number = 1;
  ColumnSize: number = 2;

  constructor(owner:string, cardType: CardTypes,
   rowSize: number, colSize: number)
  {
    this.CardOwner = owner;
    this.CardType = cardType;
    this.RowSize = rowSize;
    this.ColumnSize = colSize;
  }
}