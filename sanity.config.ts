import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { imageHotspotArrayPlugin } from 'sanity-plugin-hotspot-array'
import { schemaTypes } from './schemas'
import {
  SANITY_STUDIO_TITLE,
  SANITY_STUDIO_PROJECT_ID,
  SANITY_STUDIO_DATASET
} from './constants'

export default defineConfig({
  name: 'default',
  title: SANITY_STUDIO_TITLE,
  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  basePath: '/studio',
  plugins: [
    deskTool(),
    visionTool(),
    imageHotspotArrayPlugin(),
  ],
  schema: {
    types: schemaTypes,
  },
})