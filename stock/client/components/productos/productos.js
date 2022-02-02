import { Meteor } from 'meteor/meteor';
import {ReactiveVar} from 'meteor/reactive-var';
import { Productos } from '../../../lib/collections/productos';
import './productos.html';

Template.productos.helpers({
	productos3: function(){
    var productos3 = Productos.find({}).fetch();
    console.log("productos",productos3);
    productos3.sort(function(a, b) { //funcion que ordena los datos por apellido
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
		return productos3;
	},
});
/*Template.productos.helpers({
  myHtml: function() {
    var productos3 = Productos.find({}).fetch();
    console.log("productos",productos3);
    productos3.sort(function(a, b) { //funcion que ordena los datos por apellido
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    var html="<table><thead><tr><th>Objeto</th><th>Detalle</th><th>Cantidad</th></tr></thead><tbody>";
    productos3.forEach(function(prod) {
      console.log(prod.name);
      html+="<tr><td><input id='"+prod._id+"'type='text'name='nombre'value='"+prod.name+"'>"+"</td><td>"+prod.detalle+"</td><td>";
      html+="<button id='1'>+</button><button id='2'>-</button><button id='"+prod._id+"' class='button'>Modificar</button>";
      html+="<p>"+prod.cantidad+"</p></td><td>{{>producto_links}}</td></tr>";
    })
    html+="</tbody></table>";
    return html;
  }
});*/
Template.productos.events({
	'click .remove': function(event, template){
		//console.log(this._id); //con esto muestro el id por consola que voy a eliminar
		Meteor.call('productos.remove',this._id);

	},
	'click #1 '(event,instance) {
		var prod = Productos.findOne({"_id":this._id});
		var cant = prod.cantidad;
		cant = cant+1;
		Productos.update({"_id":this._id},{$set:{cantidad:cant}})
	},
	'click #2 '(event,instance) {
		var prod = Productos.findOne({"_id":this._id});
		var cant = prod.cantidad;
		cant = cant-1;
		Productos.update({"_id":this._id},{$set:{cantidad:cant}})
	},
	'click .button '(event,instance) {
    event.preventDefault();
    event.stopPropagation();
 		console.log("evento de clase")
 		var prod = Productos.findOne({"_id":this._id});
		let id_act = this._id;
    let nombre=$("input#"+this._id ).val(); //tomo el valor del input nombre
		let detalle=$("input#"+this._id+"detalle").val(); //tomo el valor del input detalle
    console.log("Valor nombre",nombre);
		console.log("Valor detalle",detalle);
    console.log("id nombre",id_act);
		Productos.update({"_id":this._id},{$set:{name:nombre,detalle:detalle}}) //actualizo detalle y nombre
  }
});