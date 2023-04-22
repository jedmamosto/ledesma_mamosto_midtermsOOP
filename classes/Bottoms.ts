/* eslint-disable import/prefer-default-export */
import { Clothing } from "./Clothing";

export class Bottoms extends Clothing {

  protected _isRipped: boolean;
  protected _isLongPants: boolean;

  constructor(
    productName: string,
    stockNumber: number,
    retailPrice: number,
    capitalCost: number,
    isAvailable: boolean,
    isOnSale: boolean,
    size: string,
    color: string,
    material: string,
    brand: string,
    isRipped: boolean,
    isLongPants: boolean
  ) {
    super(
      productName, 
      stockNumber, 
      retailPrice, 
      capitalCost, 
      isAvailable, 
      isOnSale, 
      size, 
      color, 
      material, 
      brand
    );

    this._isRipped = isRipped;
    this._isLongPants = isLongPants;
  }

  public hemPants(inchLength: number): string {
    if (this._isLongPants === true) {
      return `These pants will be hemmed by ${inchLength} inches.`
    }

    return `Invalid. Product is not categorized as Long Pants.`
  }

}