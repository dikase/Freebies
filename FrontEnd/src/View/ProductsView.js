import {HttpClient, json} from 'aurelia-fetch-client';
import environment from "../environment";
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class ProductsView{
	static inject() { return [Router]; }
	
	
	  constructor(router)
	  {
		  this.router = router; 
	  }

  attached() {
    this.load_products();
  }
  productsView(category){
      this.router.navigate(`CategoryView` +'/'+ category);
  }
  
  load_products(){
	  let client = new HttpClient();
    client.fetch(environment.url + "getProducts")
      .then(response => response.json())
      .then(prs => this.products = prs);
  }
}
