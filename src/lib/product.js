import fetch from 'node-fetch';

export  class IProductService{
  getProduct(){Promise};
}

export default class ProductService  extends IProductService{
   async getProduct(){
    const res = await fetch(`https://fakestoreapi.com/products`);

    return res.json();

  }
}

