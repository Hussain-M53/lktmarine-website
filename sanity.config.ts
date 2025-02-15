import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { imageHotspotArrayPlugin } from 'sanity-plugin-hotspot-array'
import { schemaTypes } from './studio/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'LKT Marine Studio',
  projectId: '32wddwdo',
  dataset:  'production',
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