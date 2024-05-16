import {defineType, defineField, defineArrayMember} from 'sanity'

export const testimonials = defineType({
  type: 'document',
  name: 'testimonials',
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
