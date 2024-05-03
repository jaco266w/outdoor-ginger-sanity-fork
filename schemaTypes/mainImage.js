import { defineType, defineField } from 'sanity'

export const mainImage = defineType({
  type: "image",
  name: "mainImage",
  options: { hotspot: true },
  fields: [
    defineField({
      type: "string",
      name: "caption",
    }),
  ],
});

