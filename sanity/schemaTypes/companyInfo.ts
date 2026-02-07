import { defineField, defineType } from 'sanity';

export const companyInfo = defineType({
  name: 'companyInfo',
  title: 'Company Info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Primary Tagline',
      type: 'string',
    }),
    defineField({
      name: 'secondaryTaglines',
      title: 'Secondary Taglines',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
    }),
    defineField({
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
    }),
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'legalName',
      title: 'Legal Name',
      type: 'string',
    }),
    defineField({
      name: 'legalType',
      title: 'Legal Type',
      type: 'string',
    }),
    defineField({
      name: 'headquarters',
      title: 'Headquarters',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Company Info',
        subtitle: 'Site-wide company information',
      };
    },
  },
});
