import {HttpClient, json} from 'aurelia-fetch-client';
import environment from '../environment';

export class AddProductView {
  title = "";
  size = "";
  description = "";
  location = "";
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
      category: this.category,
    };
    this.title = "";
    this.size = "";
    this.description = "";
    this.location = "";
    this.category = "*";
    return stash;
  }
  unstash(stash){
    this.title = stash.title;
    this.size = stash.size;
    this.description = stash.description;
    this.location = stash.location;
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
        location: values.location
      })
    })
      .then(data => {
        alert("Toode lisatud =)") // TODO: Check if this works later
      })
      .catch(err => {
        console.error(err);
        this.unstash(values);
      });

    console.debug("Saving product:", this.title, this.size, this.description, this.location, this.category);

  }
}
