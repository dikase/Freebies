import {HttpClient, json} from 'aurelia-fetch-client';
import environment from "../environment";

export class ProductsView{
  products = [];

  constructor() {
    this.httpClient = new HttpClient();
  }
  attached() {
    this.load_products();
  }

  load_products(){
    this.httpClient.fetch(environment.url + "getProducts")
      .then(response => response.json())
      .then(prs => this.products = prs);
  }
  productsView(subcategory){
      this.router.navigate(`ProductsView` +'/'+ subcategory);
  }
}
