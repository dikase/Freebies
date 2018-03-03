export class App {
constructor(){}
 configureRouter(config, router)
 {
	 this.router=router;
	 config.title="Freebies";
	 
	 config.map([
	 {title:"foo", route: ['', 'View'], name:'View', moduleId: 'View/index'},
	 {title:"foo", route: 'AddProductView', name:'AddProductView', moduleId:'View/AddProductView', nav:true},
	 {title:"foo", route: 'ProductsView', name:'ProductsView', moduleId:'View/ProductsView', nav:true},
	 {title:"foo", route: 'ProductView', name:'ProductView', moduleId:'View/ProductView', nav:true}
	 ]);
 
 }
}
