/* eslint-disable import/prefer-default-export */
import { Clothing } from "./Clothing";

export class Tops extends Clothing {

  protected _isLongSleeved: boolean;
  protected _isButtoned: boolean;

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
    isLongSleeved: boolean,
    isButtoned: boolean
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

    this._isLongSleeved = isLongSleeved;
    this._isButtoned = isButtoned;
  }

  //Unique method & Method Overload:
  public addColor(color: string) : void
  public addColor(color1: string, color2: string) : void
  public addColor(firstColor: string, secondColor?: string): string {
    if (typeof secondColor === 'string') {
      return `Added the color ${firstColor} and ${secondColor} to your customized design.`;
    }
    
    return `Added the color ${firstColor} to your customized design.`;
  }

  //Unique implemented methods & Method Override:
  public browseSimilarProducts(): string {
    return `Here are products similar to ${this._productName} top.`
  }

  public notifyShip(): string {
    return `${this._productName} top has been shipped.`
  }

  public notifyRestock(): string {
    return `${this._productName} top has been restocked.`
  }

  public writeReview(): string {
    return 'User has written a review about this top.'
  }

  public getDescription(): string {
    let sleeves: string = '';
    let buttons: string = '';

    if (this._isLongSleeved === true) {
      sleeves = 'long sleeves';
    } else {
      sleeves = 'short sleeves';
    }

    if (this._isButtoned === true) {
      buttons = 'buttoned';
    } else {
      buttons = 'buttonless';
    }

    return `${this._productName} ${buttons} ${sleeves} top by ${this._brand} of size ${this._size} has a color of ${this._color}, is made of ${this._material} material, and costs P${this._retailPrice}.`;
  }

}