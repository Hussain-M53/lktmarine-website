import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { imageHotspotArrayPlugin } from 'sanity-plugin-hotspot-array'
import { schemaTypes } from './studio/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'LKT Marine Studio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset:  process.env.SANITY_STUDIO_DATASET || '',
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