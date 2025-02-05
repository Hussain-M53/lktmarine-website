import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { GROUPS } from '../../constants'
import { validateSlug } from '../../utils/validateSlug'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TagIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'editorial',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'editorial',
      options: { source: 'title' },
      validation: validateSlug,
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }]
    }),

    defineField({
      name: 'productCategory',
      title: 'Product Category',
      type: 'reference',
      to: [{ type: 'productCategory' }],
      group: 'editorial',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'portableText',
      group: 'editorial',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
})
