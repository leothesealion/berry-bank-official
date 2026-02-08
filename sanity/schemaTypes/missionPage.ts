import { defineField, defineType } from 'sanity';

export const missionPage = defineType({
  name: 'missionPage',
  title: 'Mission Page',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      initialValue: 'Our Purpose',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'Mission & Vision',
    }),
    defineField({
      name: 'subline',
      title: 'Subline',
      type: 'text',
      initialValue: 'Building a financial system that works for people and the planet.',
    }),
    defineField({
      name: 'whyChooseHeadline',
      title: '"Why Choose" Section Headline',
      type: 'string',
      initialValue: 'Why Choose Berry Bank?',
    }),
    defineField({
      name: 'whyChooseCards',
      title: '"Why Choose" Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
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
        title: 'Mission Page',
        subtitle: 'Mission page content',
      };
    },
  },
});
