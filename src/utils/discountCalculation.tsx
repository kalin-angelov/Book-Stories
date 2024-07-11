export const discountCalculation = (regularPrice: number, discountPercent: number): string =>  {
    let calculation: number = (regularPrice - (regularPrice * (discountPercent / 100)));
    return calculation.toFixed(2);
};