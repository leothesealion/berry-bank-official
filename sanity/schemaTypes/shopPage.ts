import { defineField, defineType } from 'sanity';

export const shopPage = defineType({
  name: 'shopPage',
  title: 'Shop Page',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      initialValue: 'Sustainable Style',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'Berry Shop',
    }),
    defineField({
      name: 'subline',
      title: 'Subline',
      type: 'text',
      initialValue: 'Premium eco-friendly merchandise. Every purchase supports our mission to make green banking accessible to all.',
    }),
    defineField({
      name: 'benefits',
      title: 'Shop Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'emoji', title: 'Emoji', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Shop Page',
        subtitle: 'Shop page content',
      };
    },
  },
});
