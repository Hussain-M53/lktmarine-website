import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import { validateSlug } from '../../utils/validateSlug'
import { GROUPS } from '../../constants'

export const productCategory = defineType({
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  icon: TagIcon,
  groups : GROUPS,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group : 'editorial',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group : 'editorial',
      options: {source: 'title'},
      validation: validateSlug,
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
        group : 'editorial',
        validation: (Rule) => Rule.required(),
      }),
    defineField({
      name: 'image',
      type: 'image',
      group : 'editorial',
    }),
    defineField({
      name : 'parentCategory',
      title : 'Parent Category',
      type: 'reference',
      to: [{type: 'productCategory'}],
      group : 'editorial'
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      group : 'seo',
    }),
  ],
})
