import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import environment from "../environment";

export class CategoryView

{
	static inject() { return [Router]; }
	
	products = []
		

	constructor(router) {
		this.router = router;
	}
	

		activate(params, routerCongif) {
			
			console.log(params);		
			
			let client = new HttpClient();

			client.fetch(environment.url + params.category)
				.then(response => response.json())
				.then(prs => this.products = prs);	
			
			console.log(this.products);
			
		}
}