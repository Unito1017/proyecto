import { Clients } from '../../../lib/collections/clients';
import { Router } from 'meteor/iron:router';
import SimpleSchema from 'simpl-schema';
// Required AutoForm setup
SimpleSchema.extendOptions(['autoform']);



Template.clientForm.helpers({
	formCollection() {
		return Clients;
	}
})

Template.clientForm.onCreated(function()
{
	AutoForm.addHooks(['clientForm'],{
		onSuccess: function(operation, result, template)
		{
			Router.go('/clients');
		}
	});
})