import { Meteor } from 'meteor/meteor';

Template.clients.events({
	'click .remove': function(event, template){
		//console.log(this._id); //con esto muestro el id por consola que voy a eliminar
		Meteor.call('clients.remove',this._id);
	}
})