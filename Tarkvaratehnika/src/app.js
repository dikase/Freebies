export class App {
constructor(){}
 configureRouter(config, router)
 {
	 this.router=router;
	 config.title="Freebies";
	 
	 config.map([
	 {route: ['', 'View'], name:'View', moduleId: 'View/index'},
	 {route: 'AddProductView', name:'AddProductView', moduleId:'View/AddProductView', nav:true},
	 {route: 'ProductsView', name:'ProductsView', moduleId:'View/ProductsView', nav:true},
	 {route: 'ProductView', name:'ProductView', moduleId:'View/ProductView', nav:true}
	 ]);
 
 }
}
