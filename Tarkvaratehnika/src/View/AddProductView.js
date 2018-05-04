import {HttpClient, json} from 'aurelia-fetch-client';
import environment from '../environment';

export class AddProductView {
  title = "";
  size = "";
  description = "";
  location = "";
  email="";
  password="";
  category = "*";

  constructor() {
    this.httpClient = new HttpClient();
  }

  stash(){
    let stash = {
      title: this.title,
      size: this.size,
      description: this.description,
      location: this.location,
      email: this.email,
      password: this.password,
      category: this.category,
    };
    this.title = "";
    this.size = "";
    this.description = "";
    this.location = "";
    this.email = "",
    this.password = "",
    this.category = "*";
    return stash;
  }
  unstash(stash){
    this.title = stash.title;
    this.size = stash.size;
    this.description = stash.description;
    this.location = stash.location;
    this.email = stash.email;
    this.password = stash.password;
    this.category = stash.category;
  }

  add() {
    if (this.category === "*") {
      alert("Vali kategooria");
      return
    }
    let values = this.stash();
    this.httpClient.fetch(environment.url + "addProduct", {
      method: "POST",
      body: json({
      	category: values.category,
        title: values.title,
        size: values.size,
        description: values.description,
        location: values.location,
        email: values.email,
        password: values.password
      })
    })
      .then(data => {
        alert("Toode lisatud =)")
      })
      .catch(err => {
        console.error(err);
        this.unstash(values);
      });

    console.debug("Saving product:", this.title, this.size, this.description, this.location, this.category);

  }
}
