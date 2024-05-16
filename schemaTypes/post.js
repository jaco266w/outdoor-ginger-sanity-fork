import { defineType, defineField, defineArrayMember } from 'sanity'

export const post = defineType({
  type: "document",
  name: "post",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "string",
      name: "subtitle",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "title" },
    }),
    defineField({
      type: "reference",
      name: "author",
      to: [{ type: "author" }],
    }),
    defineField({
      type: "mainImage",
      name: "mainImage",
    }),
    defineField({
      type: "datetime",
      name: "publishedAt",
    }),
    defineField({
      type: "array",
      name: "tags",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "content",
      of: [
        defineArrayMember({
          type: "block",
        }),
        defineArrayMember({
          type: "image",
          fields: [
            {
              type: "string",
              name: "caption",
            },
          ],
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      type: "string",
      name: "Youtube_Short_URL",
      description: "Please include the full URL (e.g. https://youtu.be/abcdefghijk)",
      validation: (Rule) => Rule.uri().custom((url) => {
        if (url && !url.startsWith('https://www.youtube.com/shorts/')) {
          return 'URL must start with "https://www.youtube.com/shorts/"';
        }
        return true;
      })
    }),
    defineField({
      type: "string",
      name: "Youtube_Short_Title",
    }),
    defineField({
      type: "string",
      name: "Latitude",
    }),
    defineField({
      type: "string",
      name: "Longitude",
    }),
  ],
});

