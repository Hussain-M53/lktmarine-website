import {defineArrayMember, defineField} from 'sanity'

export const portableTextType = defineField({
  name: 'portableText',
  type: 'array',
  of: [
    defineArrayMember({
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {
            title: 'Italic',
            value: 'em',
          },
          {
            title: 'Strong',
            value: 'strong',
          },
        ],
        annotations: [
         
          {
            name: 'linkInternal',
            type: 'linkInternal',
          },
         
        ],
      },
      type: 'block',
    }),
    defineArrayMember({ type: 'grid' }),
    defineArrayMember({ type: 'images' }),
    defineArrayMember({ type: 'imageWithProductHotspots', title: 'Image with Hotspots' }),
    defineArrayMember({ type: 'products' }),
  ],
})
