import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'Main headline on the hero section',
      initialValue: 'Where Your Money Grows Green',
    }),
    defineField({
      name: 'heroSubline',
      title: 'Hero Subline',
      type: 'string',
      description: 'Subtitle below the hero headline',
      initialValue: "Latin America's First Fully Green Digital Bank.",
    }),
    defineField({
      name: 'heroHook',
      title: 'Hero Hook',
      type: 'string',
      description: 'Compelling statistic or hook text',
      initialValue: 'Switching to a green bank reduces your carbon footprint by 52.2%.',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Call-to-action button text',
      initialValue: 'Join the Waitlist',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page Settings',
      };
    },
  },
});
