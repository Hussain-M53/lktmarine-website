import {defineArrayMember, defineField} from 'sanity'


export const productHotspotsType = defineField({
  name: 'productHotspots',
  title: 'Hotspots',
  type: 'array',
  of: [
    defineArrayMember({type: 'spot'}),
  ],
  options: {
    imageHotspot: {
      imagePath: 'image',
      pathRoot: 'parent',
    },
  },
})
