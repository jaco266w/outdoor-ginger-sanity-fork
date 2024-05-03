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
  ],
});

