import {defineField} from 'sanity'

export const spotType = defineField({
  name: 'spot',
  title: 'Spot',
  type: 'object',
  fieldsets: [{name: 'position', options: {columns: 2}}],
  fields: [
    defineField({
      name: 'x',
      type: 'number',
      readOnly: true,
      fieldset: 'position',
      initialValue: 50,
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
    defineField({
      name: 'y',
      type: 'number',
      readOnly: true,
      fieldset: 'position',
      initialValue: 50,
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
  ],
})
