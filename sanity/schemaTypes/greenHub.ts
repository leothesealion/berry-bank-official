import { defineField, defineType } from 'sanity';

export const greenHub = defineType({
  name: 'greenHub',
  title: 'Green Hub',
  type: 'document',
  fields: [
    defineField({
      name: 'embedUrl',
      title: 'Embed URL',
      type: 'url',
      description: 'URL for the Green Hub iframe embed',
      initialValue: 'https://greeninitiatives-client-prod-608881704830.us-central1.run.app/',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Title for the Green Hub section',
      initialValue: 'Green Hub',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the Green Hub',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Green Hub Settings',
      };
    },
  },
});
