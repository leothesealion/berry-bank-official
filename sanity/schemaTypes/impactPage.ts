import { defineField, defineType } from 'sanity';

export const impactPage = defineType({
  name: 'impactPage',
  title: 'Impact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      initialValue: 'Real Results',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'Our Impact',
    }),
    defineField({
      name: 'subline',
      title: 'Subline',
      type: 'text',
      initialValue: 'Every deposit makes a difference. See how your money is creating positive change across Latin America and beyond.',
    }),
    defineField({
      name: 'stats',
      title: 'Impact Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'unit', title: 'Unit', type: 'string' },
            { name: 'emoji', title: 'Emoji', type: 'string' },
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
    }),
    defineField({
      name: 'projectCategories',
      title: 'Project Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'percentage', title: 'Percentage', type: 'number' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'color', title: 'Tailwind Color Class', type: 'string', description: 'e.g. bg-growth, bg-green-600' },
          ],
          preview: {
            select: { title: 'title', subtitle: 'percentage' },
            prepare({ title, subtitle }) {
              return { title, subtitle: `${subtitle}%` };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'ctaHeadline',
      title: 'CTA Headline',
      type: 'string',
      initialValue: 'Ready to Make an Impact?',
    }),
    defineField({
      name: 'ctaSubline',
      title: 'CTA Subline',
      type: 'text',
      initialValue: 'Join thousands of members who are growing their wealth while protecting our planet.',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Get Started Today',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Impact Page',
        subtitle: 'Impact page content',
      };
    },
  },
});
