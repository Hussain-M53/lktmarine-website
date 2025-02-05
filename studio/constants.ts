
// Currency code (ISO 4217) to use when displaying prices in the studio

import { ColorWheelIcon, ComposeIcon, SearchIcon } from '@sanity/icons'

// Document types which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
export const LOCKED_DOCUMENT_TYPES = ['settings', 'home', 'media.tag']

// References to include in 'internal' links
export const PAGE_REFERENCES = [
  {type: 'collection'},
  {type: 'home'},
  {type: 'page'},
  {type: 'product'},
]

// Field groups used through schema types
export const GROUPS = [
  {
    name: 'theme',
    title: 'Theme',
    icon: ColorWheelIcon,
  },
  {
    default: true,
    name: 'editorial',
    title: 'Editorial',
    icon: ComposeIcon
  },
  {
    name: 'seo',
    title: 'SEO',
    icon: SearchIcon
  },
]
