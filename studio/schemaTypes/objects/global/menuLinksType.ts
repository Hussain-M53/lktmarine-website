import {defineField} from 'sanity'

export const menuLinksType = defineField({
  name: 'menuLinks',
  title: 'Menu Links',
  type: 'array',
  of: [
    defineField({
      name: 'collectionGroup',
      type: 'collectionGroup',
    }),
  ],
})
