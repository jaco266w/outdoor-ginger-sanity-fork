import {defineType, defineField, defineArrayMember} from 'sanity'

export const upcomingEvents = defineType({
  type: 'document',
  name: 'upcomingEvents',
  fields: [
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
        defineArrayMember({
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'caption',
            },
          ],
          options: {hotspot: true},
        }),
      ],
    }),
    defineField({
      type: 'string',
      name: 'howToParticipate',
    }),
  ],
})
