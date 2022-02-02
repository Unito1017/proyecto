import SimpleSchema from 'simpl-schema';
// Required AutoForm setup
SimpleSchema.extendOptions(['autoform']);

export const Cantidad = new SimpleSchema({   //LAS NOTAS SE DEFINEN DIFERENTE AL VIDEO
	cantidad: {
		type: String,
		label: "Cantidad"
	}
})