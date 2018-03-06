export class App {
constructor(){}
 configureRouter(config, router)
 {
	 this.router=router;
	 config.title="Freebies";
	 
	 config.map([
	 {title:"Freebies", route: ['', 'View'], name:'View', moduleId: 'View/index'},
	 {title:"Freebies", route: 'AddProductView', name:'AddProductView', moduleId:'View/AddProductView', nav:true},
	 {title:"Freebies", route: 'ProductsView', name:'ProductsView', moduleId:'View/ProductsView', nav:true},
	 {title:"Freebies", route: 'ProductView', name:'ProductView', moduleId:'View/ProductView', nav:true}
	 ]);
 
 }
}
