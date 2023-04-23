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

  // Unique method:
  public hemPants(inchLength: number): string {
    if (this._isLongPants === true) {
      return `These pants will be hemmed by ${inchLength} inches.`
    }

    return `Invalid. Product is not categorized as Long Pants.`
  }

  //Unique implemented methods:
  public browseSimilarProducts(): string {
    return `Here are products similar to ${this._productName} bottom.`
  }

  public notifyShip(): string {
    return `${this._productName} bottom has been shipped.`
  }

  public notifyRestock(): string {
    return `${this._productName} bottom has been restocked.`
  }

  public writeReview(): string {
    return 'User has written a review about this bottom.'
  }

  public getDescription(): string {
    let pantLength: string = '';
    let ripped: string = '';

    if (this._isLongPants === true) {
      pantLength = 'long pants';
    } else {
      pantLength = 'shorts';
    }

    if (this._isRipped === true) {
      ripped = 'ripped';
    } else {
      ripped = 'non-ripped';
    }

    return `${this._productName} ${ripped} ${pantLength} by ${this._brand} of size ${this._size} has a color of ${this._color}, is made of ${this._material} material, and costs P${this._retailPrice}.`;
  }

}