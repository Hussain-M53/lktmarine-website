import { SchemaTypeDefinition } from 'sanity'

// Define your schema types here
const schemaTypes: SchemaTypeDefinition[] = [
  // Example schema type
  {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'text',
      },
    ],
  },
]

export { schemaTypes } 