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

  //Method Override:
  public getDescription(): string {
    return `This ${this._productName} top by ${this._brand} of size ${this._size} has a color of ${this._color}, is made of ${this._material} material, and costs ${this._retailPrice}.`;
  }

  //Method Overloading:
  public addColor(color: string) : void
  public addColor(color1: string, color2: string) : void
  public addColor(firstColor: string, secondColor?: string): string {
    if (typeof secondColor === 'string') {
      return `Added the color ${firstColor} and ${secondColor} to the design.`;
    }
    
    return `Added the color ${firstColor} to the design.`;
  }

}