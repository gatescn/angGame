import{ CardTypes } from './card-types.enum';

export class PlayerCard {
  CardOwner: String = "";
  CardType: CardTypes = CardTypes.None;
  RowSize: number = 1;
  ColumnSize: number = 2;

  public constructor(owner:string, 
   rowSize: number, colSize: number)
  {
    this.CardOwner = owner;
    this.RowSize = rowSize;
    this.ColumnSize = colSize;
  }
}