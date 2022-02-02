import SimpleSchema from 'simpl-schema';
// Required AutoForm setup
SimpleSchema.extendOptions(['autoform']);

export const Notes = new SimpleSchema({   //LAS NOTAS SE DEFINEN DIFERENTE AL VIDEO
	note: {
		type: String,
		label: "Nota"
	}
})