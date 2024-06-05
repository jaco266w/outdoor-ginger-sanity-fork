import { defineType, defineField, defineArrayMember } from 'sanity'

export const product = defineType({
  type: "document",
  name: "product",
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
      type: "text",
      name: "description",
    }),
    defineField({
      type: "array",
      name: "body",
      title: "Main content",
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
      type: "number",
      name: "price",
    }),
    defineField({
      type: "number",
      name: "memberPrice",
    }),
    defineField({
      type: "boolean",
      name: "isAffiliate",
    }),
    defineField({
      type: "url",
      name: "affiliateLink",
      hidden: ({ document }) => !document.isAffiliate,
    }),
    defineField({
      type: "array",
      name: "images",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
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
      type: 'array',
      name: 'materials',
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
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      type: "string",
      name: "weight",
    }),
    defineField({
      type: "reference",
      name: "category",
      to: [{ type: "category" }],
    }),
  ],
});

