import {defineType, defineField, defineArrayMember} from 'sanity'

export const previousEvents = defineType({
  type: 'document',
  name: 'previousEvents',
  fields: [
    defineField({
      type: 'image',
      name: 'images',
    }),
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'string',
      name: 'date',
    }),
    defineField({
      type: 'string',
      name: 'time',
    }),
    defineField({
      type: 'string',
      name: 'location',
    }),
    defineField({
      type: 'array',
      name: 'content',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
    defineField({
      type: 'string',
      name: 'howToParticipate',
    }),
  ],
})