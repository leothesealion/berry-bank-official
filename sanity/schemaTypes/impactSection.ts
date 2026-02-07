import { defineField, defineType } from 'sanity';

export const impactSection = defineType({
  name: 'impactSection',
  title: 'Impact Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Your Impact',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'chartData',
      title: 'Chart Data',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value (%)', type: 'number' },
            { name: 'color', title: 'Color (Hex)', type: 'string' },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value',
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle: `${subtitle}%`,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Impact Section',
        subtitle: 'Environmental impact data & chart',
      };
    },
  },
});
