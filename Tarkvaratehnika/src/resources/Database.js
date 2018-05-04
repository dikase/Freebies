import {HttpClient, json} from 'aurelia-fetch-client';
import environment from '../environment';

/**
 * @typedef {Object} Product
 * @property {string} category
 * @property {string} title
 * @property {string} size
 * @property {string} location
 * @property {string} description
 * @property {string} password
 * @property {string} email
 */
export class Database {
  static httpClient = new HttpClient();

  /**
   * @param {Product} product
   * @return {Promise<string>}
   */
  static addProduct(product){
    return this.httpClient.fetch(environment.url + "addProduct", {
      method: "POST",
      body: json({
        category: product.category,
        title: product.title,
        size: product.size,
        description: product.description,
        location: product.location,
        email: product.email,
        password: product.password
      })
    })
  }


  /**
   * @returns {Promise.<Product[]>}
   */
  static loadProducts(){
    return this.httpClient.fetch(environment.url + "getProducts")
      .then(response => response.json())
  }

  // TODO: Endpoint for this in the backend
  static contactOwner(productID){
    return this.httpClient.fetch(environment.url + "contactProductOwner", {
      body: productID
    })
      .then(response => response.json);
  }

  // TODO: Endpoint for this in the backend
  static republish(productID, password){
    return this.httpClient.fetch(environment.url + "republishProduct",{
      body: json({
        id: productID,
        password: password
      })
    })
    .then(response => response.json);
  }

  // TODO: Endpoint for this in the backend
  static remove(productID, password){
    return this.httpClient.fetch(environment.url + "removeProduct", {
      body: json({
        id: productID,
        password: password
      })
    })
    .then(response => response.json);

  }
}
