import { Router } from 'meteor/iron:router';
import { Meteor } from 'meteor/meteor';
import { Productos, ProductosIndex } from '../lib/collections/productos';
import { Clientes, ClientesIndex } from '../lib/collections/clientes';
import { Clients, ClientsIndex } from '../lib/collections/clients';


Router.onBeforeAction(function () {  

  if (!Meteor.userId()) {    
    Router.go('home');    
  } else {
    if(Router.current().route.getName() === 'home'){
       Router.go('productos');       
    }        
  }
  this.next();
  
});

Router.configure({
	layoutTemplate: 'baseLayout',
	waitOn:function() { 
		return [
			function() {return Meteor.subscribe('productos');},
			function() {return Meteor.subscribe('ventas');},
			function() {return Meteor.subscribe('venta');},
			function() {return Meteor.subscribe('proyecto');},
			
		]
		  
	}	
});


Router.route('/', {
  name: 'home'
});


//-------------------------------SECCION PROYECTOS----------------------------------

Router.route('/productos',{
	name: 'productos',
	data: {
		productos(){
			return ProductosIndex;
		}
	}
})

Router.route('/ventas',{
	name: 'ventas',
	data: {
		clientes(){
			return ClientesIndex;

		}
	}
})

Router.route('/venta',{
	name: 'venta',
	data: {
		clients(){
			return ClientsIndex;

		}
	}
})


Router.route('/producto_form', {
	name: 'producto_form'
})

Router.route('/producto/:_id', function(){
	let producto = Productos.findOne({_id: this.params._id});
	if (!producto){
		Router.go('productos');
	}
	else{
			this.render('producto_detail',{
			data: {
				producto: producto
			}
		})
	}
}, {
	name: 'producto_detail'
})



Router.route('Listas', {
	name: 'Listas'
})

//-------------------------------SECCION PROFILE----------------------------------


Router.route('/profile', {
	name: 'stock',
	data: {
		user() {
			if(Meteor.user()){
				return {
				id: Meteor.user()._id,
				email: Meteor.user().emails[0].address
				}
			}
			
		}
	}
})

//-------------------------------SECCION PRODUCTOS----------------------------------

Router.configure({
	layoutTemplate: 'baseLayout',
	waitOn:function() { 
		return Meteor.subscribe('clientes'); 
	}	
});


//-------------------------------SECCION PROYECTOS----------------------------------
Router.route('/clientes',{
	name: 'clientes',
	data: {
		clientes(){
			return ClientesIndex;
		}
	}
})

Router.route('/cliente_form', {
	name: 'cliente_form'
})

Router.route('/cliente/:_id', function(){
	let cliente = Clientes.findOne({_id: this.params._id});
	if (!cliente){
		Router.go('clientes');
	}
	else{
		this.render('cliente_detail',{
			data: {
				cliente: cliente
			}
		})
	}
}, {
	name: 'cliente_detail'
})

//-------------------------------SECCION PROFILE----------------------------------

Router.configure({
	layoutTemplate: 'baseLayout',
	waitOn:function() { 
		return Meteor.subscribe('clients'); 
	}	
});


//-------------------------------SECCION PROYECTOS----------------------------------
Router.route('/clients',{
	name: 'clients',
	data: {
		clients(){
			return ClientsIndex;
		}
	}
})

Router.route('/client_form', {
	name: 'client_form'
})

Router.route('/client/:_id', function(){
	let client = Clients.findOne({_id: this.params._id});
	if (!client){
		Router.go('clients');
	}
	else{
		this.render('client_detail',{
			data: {
				client: client
			}
		})
	}
}, {
	name: 'client_detail'
})


//-------------------------------SECCION PROVEDOR---------------------------



//-------------------------------SECCION PROYECTOS----------------------------------
