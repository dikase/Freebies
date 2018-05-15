import {HttpClient, json} from 'aurelia-fetch-client';
import environment from "../environment";

export class ProductsView{
  products = [];
  
  constructor(router) {
		this.router = router;
	}

  attached() {
    this.load_products();
  }

  activate(params, routerCongif) {
		
		console.log(params);		
		
		let client = new HttpClient();

		client.fetch(environment.url + params.category)
			.then(response => response.json())
			.then(prs => this.products = prs);	
		
		console.log(this.products);
		
	}	

  load_products(){
	  let client = new HttpClient();
    client.fetch(environment.url + "getProducts")
      .then(response => response.json())
      .then(prs => this.products = prs);
  }
}
