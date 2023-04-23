import { OnlineShopping } from "./interfaces/OnlineShopping";
import { Clothing } from "./classes/Clothing";
import { Tops } from "./classes/Tops";
import { Bottoms } from "./classes/Bottoms";

// Tops
const theGreatWaveShirt = new Tops('The Great Wave', 12, 450, 390, true, false, 'Large', 'Blue', 'Cotton', 'Uniqlo', false, false);
console.log(theGreatWaveShirt.createAccount());
console.log(theGreatWaveShirt.login());

console.log(theGreatWaveShirt.addColor('White'));
console.log(theGreatWaveShirt.addColor('Yellow', 'Red'));
console.log(theGreatWaveShirt.browseSimilarProducts());
console.log(theGreatWaveShirt.notifyShip());
console.log(theGreatWaveShirt.notifyRestock());
console.log(theGreatWaveShirt.writeReview());
console.log(theGreatWaveShirt.getDescription());
console.log('-------------------')

// Bottoms
const appleBottomJeans = new Bottoms('The Apple', 7, 599, 500, true, true, 'Medium', 'Navy Blue', 'Denim', 'Bench', true, true);
console.log(appleBottomJeans.hemPants(2));
console.log(appleBottomJeans.browseSimilarProducts());
console.log(appleBottomJeans.notifyShip());
console.log(appleBottomJeans.notifyRestock());
console.log(appleBottomJeans.getDiscountPrice(0.10));
console.log(appleBottomJeans.writeReview());
console.log(appleBottomJeans.getDescription());


