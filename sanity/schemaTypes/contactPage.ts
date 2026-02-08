import { defineField, defineType } from 'sanity';

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      initialValue: 'Get In Touch',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'Contact Us',
    }),
    defineField({
      name: 'subline',
      title: 'Subline',
      type: 'text',
      initialValue: "Have questions about green banking? We're here to help you on your sustainable finance journey.",
    }),
    defineField({
      name: 'cards',
      title: 'Contact Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name (Mail, MapPin, Phone, etc.)' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'linkPrefix', title: 'Link Prefix', type: 'string', description: 'e.g. mailto: or tel:' },
          ],
          preview: {
            select: { title: 'title', subtitle: 'value' },
          },
        },
      ],
    }),
    defineField({
      name: 'newsletterHeading',
      title: 'Newsletter Heading',
      type: 'string',
      initialValue: 'Join the Movement',
    }),
    defineField({
      name: 'newsletterSubline',
      title: 'Newsletter Subline',
      type: 'string',
      initialValue: 'Be the first to know about our launch and exclusive updates.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Page',
        subtitle: 'Contact page content',
      };
    },
  },
});
