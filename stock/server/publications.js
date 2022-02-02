import { Meteor } from 'meteor/meteor';
import { Projects } from '../lib/collections/projects';
import { Productos } from '../lib/collections/productos';
import { Clientes } from '../lib/collections/clientes';
import { Clients } from '../lib/collections/clients';

Meteor.publish('projects', function projectsPublication()
{
	return Projects.find({owner: this.userId});
});
Meteor.publish('productos', function productosPublication()
{
	return Productos.find({owner: this.userId});
});

Meteor.publish('clientes', function clientesPublication()
{
	return Clientes.find({owner: this.userId});
});

Meteor.publish('clients', function clientsPublication()
{
	return Clients.find({owner: this.userId});
});