import {defineType, defineField} from 'sanity'

export const donation = defineType({
  type: 'document',
  name: 'donation',
  fields: [
    defineField({
      type: 'number',
      name: 'procent',
    }),
  ],
})
