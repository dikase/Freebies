import {bindable, bindingMode} from 'aurelia-framework';

export class ProductView{
  @bindable product = null;
  in_wishlist = false;

  change(elem){
    this.in_wishlist = !this.in_wishlist;
    alert(this.in_wishlist ? "Soov edastatud!" : "Soov tühistatud!");
  }
}
