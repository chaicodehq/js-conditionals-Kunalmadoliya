/**
 * 📦 ShopSwift Shipping Calculator
 *
 * ShopSwift is a growing online store. They've hired you to build their
 * shipping cost calculator. The cost depends on the package weight,
 * where it's going, and the order total.
 *
 * Domestic Shipping (country === "US"):
 *   - Weight up to 1 kg:   $5
 *   - Weight up to 5 kg:   $10
 *   - Weight over 5 kg:    $15
 *
 * 
 * International Shipping (any other country):
 *   - Weight up to 1 kg:   $15
 *   - Weight up to 5 kg:   $25
 *   - Weight over 5 kg:    $40
 *
 * Free Shipping:
 *   - Domestic orders over $50 get FREE shipping (return 0)
 *   - International orders over $100 get FREE shipping (return 0)
 *
 * Rules:
 *   - If weight is 0 or negative, return -1
 *   - If orderTotal is negative, return -1
 *
 * @param {number} weight - Package weight in kilograms
 * @param {string} country - Destination country code (e.g., "US", "UK", "IN")
 * @param {number} orderTotal - Total order amount in dollars
 * @returns {number} Shipping cost, 0 for free shipping, or -1 for invalid input
 */
export function calculateShipping(weight, country, orderTotal) {
  if (weight <= 0) {
    return -1;
  }

  if (orderTotal < 0) {
    return -1;
  }

  //  domestic
  let weightUpto1kgD = weight <= 1 && weight > 0;
  let weightUpto5kgD = weight > 1 && weight <= 5;
  let over5kgD = weight > 5;

  if (country === "US") {
    if (orderTotal > 50) {
      return 0;
    }


    if(weightUpto1kgD){
      return 5
    }else if(weightUpto5kgD){
      return 10
    }else if(over5kgD){
      return 15
    }
  } else {
    if (orderTotal > 100) {
      return 0;
    }



    if(weightUpto1kgD){
      return 15
    }else if(weightUpto5kgD){
      return 25
    }else if(over5kgD){
      return 40
    }
  }
}
