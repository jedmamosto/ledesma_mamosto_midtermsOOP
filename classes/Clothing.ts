/* eslint-disable import/prefer-default-export */
import { OnlineShopping } from '../interfaces/OnlineShopping'

export abstract class Clothing implements OnlineShopping {
  protected _productName: string;

  protected _stockNumber: number;

  protected _retailPrice: number;

  protected _capitalCost: number;

  protected _isAvailable: boolean;

  protected _isOnSale: boolean;

  protected _size: string;

  protected _color: string;

  protected _material: string;

  protected _brand: string;

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
  ) {
    this._productName = productName;
    this._stockNumber = stockNumber;
    this._retailPrice = retailPrice;
    this._capitalCost = capitalCost;
    this._isAvailable = isAvailable;
    this._isOnSale = isOnSale;
    this._size = size;
    this._color = color;
    this._material = material;
    this._brand = brand;
  }

  // maybe we can create a separate class that stores this info instead
  createAccount(): string {
    return 'User has created an account!';
  }

  // like an account class
  login(): string {
    return 'User has logged in.';
  }

  // can have two properties: userName and userPassword
  logout(): string {
    return 'User has logged out.';
  }

  // like login will check if user and pass match from createAccount

  browseProducts(): string {
    return 'These are the available items for sale...';
  }

  notifyShip(): string {
    return 'Your order has been shipped';
  }

  notifyRestock(): string {
    return 'This product has been restocked.';
  }

  getDiscountPrice(discount: number): number {
    return this._retailPrice - (this._retailPrice * discount);
  }

  placeOrder(): string {
    return 'Order has been placed';
  }

  writeReview(): string {
    return 'User has written a review';
  }

  getDescription(): string {
    return `${this._productName} with size ${this._size}, color ${this._color}, and material of ${this._material} of the ${this._brand} with a price of ${this._retailPrice}.`;
  }
}
