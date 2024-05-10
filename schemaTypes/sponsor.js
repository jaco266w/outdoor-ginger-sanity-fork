import { defineType, defineField } from 'sanity'

export const sponsor = defineType({
    type: "document",
    name: "sponsor",
    fields: [
        defineField({
            type: "string",
            name: "Sponsor_Name",
        }),
      defineField({
        type: "image",
        name: "Sponsor_Logo",
      }),
    ],
    });