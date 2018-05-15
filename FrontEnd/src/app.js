import {RouterConfiguration, Router} from 'aurelia-router';
import {PLATFORM, bindable} from 'aurelia-pal';

export class App {
constructor(){}
 configureRouter(config, router)
 {
	 this.router=router;
	 config.title="Freebies";
     config.options.pushState = true;
     config.options.root = '/'; 
	 
	 config.map([
	 {title:"Freebies", route: ['', 'View'], name:'View', moduleId: PLATFORM.moduleName('View/index')},
	 {title:"Freebies", route: 'AddProductView', name:'AddProductView', moduleId: PLATFORM.moduleName('View/AddProductView'), nav:true},
	 {title:"Freebies", route: 'ProductsView/:subcategory', name:'CategoryView', moduleId: PLATFORM.moduleName('View/ProductsView') },
	 {title:"Freebies", route: 'ProductsView', name:'ProductsView', moduleId: PLATFORM.moduleName('View/ProductsView'), nav:true},
	 {title:"Freebies", route: 'ProductView', name:'ProductView', moduleId: PLATFORM.moduleName('View/ProductView'), nav:true}
	 ]);
 
 }
}
