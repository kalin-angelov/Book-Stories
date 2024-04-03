export const discountCalculation = (regularPrice, discountPercent) =>  {
    let calculation = (regularPrice - (regularPrice * (discountPercent / 100)));
    return calculation.toFixed(2);
};