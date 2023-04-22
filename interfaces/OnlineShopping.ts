export interface OnlineShopping {
  createAccount(): string; // ask for userName and userPassword returns message
  login(): string; // let user input userName and userPassword returns message
  logout(): string; // ends program
  browseProducts(): string; // show user list of products
  notifyShip(): string; // returns message
  notifyRestock(): string; // refills the stock
  getDiscountPrice(discount: number): number; // returns discounted price
  placeOrder(): string;
  writeReview(): string;
  getDescription(): string;
}
