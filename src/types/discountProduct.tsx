export interface DiscountProduct {
    _id: number,
    title: string,
    regularPrice: number,
    discount: number,
    inStock?: number,
    pages: number,
    publisher: string,
    language: string,
    author: string,
    summary: string,
    imgUrl: string
};