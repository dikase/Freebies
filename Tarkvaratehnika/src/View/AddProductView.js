import {HttpClient, json} from 'aurelia-fetch-client';

export class AddProductView {
  title = "";
  size = "";
  description = "";
  location = "";
  category = "*";
  httpClient = new HttpClient();
  products = [];

  constructor() {
    this.load_products();
  }

  load_products(){
    this.httpClient.fetch("http://localhost:8080/getProducts")
      .then(response => response.json())
      .then(prs => this.products = prs);
  }

  add() {
    if (this.category === "*") {
      alert("Vali kategooria");
      return
    }
    this.httpClient.fetch('http://localhost:8080/addProduct', {
      method: "POST",
      body: json({
      	category: this.category,
        title: this.title,
        size: this.size,
        description: this.description,
        location: this.location      
      })
    })
      .then(() => {this.load_products()});


    console.log("I was clicked");
    console.log(this.title, this.size, this.description, this.location, this.category);

  }
}
