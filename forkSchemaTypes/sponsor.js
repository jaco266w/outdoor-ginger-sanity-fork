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
          type: "string",
          name: "Sponsor_Website",
          description: "Please include the full URL (e.g. https://www.example.com)",
          validation: (Rule) => Rule.required().uri({allowRelative: false})
        }),
        defineField({
          type: "image",
          name: "Sponsor_Logo",
          description: "Please only upload white logos with transparent backgrounds.(PNG/WEBP file only)",
          validation: (Rule) => Rule.required().custom((fieldValue, context) => {
            if (fieldValue && fieldValue.asset) {
              const assetRefParts = fieldValue.asset._ref.split('-');
              const extensionPart = assetRefParts[assetRefParts.length - 1];
              const extension = extensionPart.split('.')[0];
              if (extension !== 'png' && extension !== 'webp') {
                return 'Only PNG and WEBP files are allowed';
              }
            }
            return true;
          })
        }),
    ],
    });