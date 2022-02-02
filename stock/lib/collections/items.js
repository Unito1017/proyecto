import SimpleSchema from 'simpl-schema';
// Required AutoForm setup
SimpleSchema.extendOptions(['autoform']);

export const Items = new SimpleSchema({   //LAS NOTAS SE DEFINEN DIFERENTE AL VIDEO
	item: {
		type: String,
		label: "Item"
	}
})