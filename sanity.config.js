import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { forkSchemaTypes } from './forkSchemaTypes'

export default defineConfig([{
  name: 'default',
  title: 'Outdoor Ginger - Production',
  basePath: '/production',

  projectId: 'aq20tlwi',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
},
{
  name: 'fork',
  title: 'Outdoor Ginger - Fork',
  basePath: '/fork',
  projectId: 'aq20tlwi',
  dataset: 'fork',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: forkSchemaTypes,
  },
}
])
