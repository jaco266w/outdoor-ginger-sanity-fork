import {defineType, defineField, defineArrayMember} from 'sanity'

export const whatPeopleSay = defineType({
  type: 'document',
  name: 'whatPeopleSay',
  fields: [
    defineField({
      type: 'string',
      name: 'Sponsor_Name',
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
  ],
})
