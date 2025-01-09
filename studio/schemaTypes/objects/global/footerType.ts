import {defineField} from 'sanity'

export const footerType = defineField({
  name: 'footerSettings',
  title: 'Footer',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'text',
      type: 'portableTextSimple',
    }),
  ],
})
