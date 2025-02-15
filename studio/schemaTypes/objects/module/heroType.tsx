import {defineArrayMember, defineField} from 'sanity'

export const heroType = defineField({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
    }),
    
    defineField({
      name: 'content',
      type: 'array',
      validation: (Rule) => Rule.max(1),
      of: [
        defineArrayMember({
          name: 'imageWithProductHotspots',
          type: 'imageWithProductHotspots',
        }),
      ],
    }),
  ],
})
