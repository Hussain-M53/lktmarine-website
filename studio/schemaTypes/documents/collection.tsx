
import {defineArrayMember, defineField, defineType} from 'sanity'
import {PackageIcon} from '@sanity/icons'
import {getExtension} from '@sanity/asset-utils'
import { GROUPS } from '../../constants'

export const collectionType = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  icon: PackageIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
    }),
    defineField({
      name: 'vector',
      title: 'Vector artwork',
      type: 'image',
      description: 'Displayed in collection links using color theme',
      options: {
        accept: 'image/svg+xml',
      },
      group: 'theme',
      validation: (Rule) =>
        Rule.custom((image) => {
          if (!image?.asset?._ref) {
            return true
          }

          const format = getExtension(image.asset._ref)

          if (format !== 'svg') {
            return 'Image must be an SVG'
          }
          return true
        }),
    }),
    defineField({
      name: 'showHero',
      type: 'boolean',
      description: 'If disabled, page title will be displayed instead',
      group: 'editorial',
    }),
    defineField({
      name: 'hero',
      type: 'hero',
      hidden: ({document}) => !document?.showHero,
      group: 'editorial',
    }),
    defineField({
      name: 'modules',
      type: 'array',
      description: 'Editorial modules to associate with this collection',
      of: [
        defineArrayMember({type: 'callToAction'}),
        defineArrayMember({type: 'image'}),
      ],
      group: 'editorial',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
})
