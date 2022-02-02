import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'; //ESTA LIBRERIA CAMBIO, es diferente a la del video
import { Notes } from './notes';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { EasySearch } from 'meteor/easy:search';

// Required AutoForm setup
SimpleSchema.extendOptions(['autoform']);

export const Clients = new Mongo.Collection('clients');

export const ClientsIndex = new EasySearch.Index({
	collection: Clients,
	fields: ['name', 'summary'],
	engine: new EasySearch.Minimongo(),
	defaultSearchOptions: {limit: 2}
})


Clients.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: 'Nombre del proyecto',
		max: 200
	},
	owner:{
		type: String,
		label: "Propietario",
		autoValue() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	created: {
		type: Date,
		autoValue() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	},
	summary:{ 
		type: String, 
		label: 'Detalle del Proyecto', 
		optional: true, 
		max: 2000, 
		autoform:{ 					//EL AUTOFORM SE DEFINE DIFERENTE AL VIDEO
			type: "textarea", 
			row: 10, 
			//class: "materialize-textarea"
			class: "textarea"
		}
	}﻿,
	
	notes: {        
    type: Array,		//EL ARRAY TAMBIEN SE DEFINE DIFERENTE AL VIDEO
    optional: true,    
  	},
  	'notes.$': Notes
}));

Clients.allow({
	insert: function(userId, doc){
		return doc.owner === userId;
	}
})

Meteor.methods({
	'clients.remove'(clienttId){
		check(clientId, String);
		Clients.remove(clientId);
	}
})