import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'mission', title: 'Mission Section' },
    { name: 'join', title: 'Join Section' },
  ],
  fields: [
    // Hero
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      description: 'Main headline on the hero section',
      initialValue: "Latin America's First Fully Green Digital Bank",
    }),
    defineField({
      name: 'heroSubline',
      title: 'Hero Subline',
      type: 'string',
      group: 'hero',
      description: 'Subtitle below the hero headline',
      initialValue: "Don't choose between a sleek experience and saving the planet.",
    }),
    defineField({
      name: 'heroHook',
      title: 'Hero Hook',
      type: 'string',
      group: 'hero',
      description: 'Compelling statistic or hook text',
      initialValue: 'Switching to a green bank reduces your carbon footprint by 52.2%.',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      group: 'hero',
      description: 'Call-to-action button text',
      initialValue: 'Join the Waitlist',
    }),
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge Text',
      type: 'string',
      group: 'hero',
      description: 'Small badge above the headline',
      initialValue: 'Now accepting early access signups',
    }),
    defineField({
      name: 'heroLearnMoreText',
      title: 'Learn More Button Text',
      type: 'string',
      group: 'hero',
      description: 'Secondary button text',
      initialValue: 'Learn More',
    }),

    // Mission Section
    defineField({
      name: 'missionSectionTitle',
      title: 'Section Title',
      type: 'string',
      group: 'mission',
      initialValue: 'Our Purpose',
    }),
    defineField({
      name: 'missionSectionSubline',
      title: 'Section Subline',
      type: 'string',
      group: 'mission',
      initialValue: 'More than a bank. A movement for a greener future.',
    }),

    // Join Section
    defineField({
      name: 'joinHeadline',
      title: 'Join Headline',
      type: 'string',
      group: 'join',
      initialValue: 'Be Part of the Change',
    }),
    defineField({
      name: 'joinSubline',
      title: 'Join Subline',
      type: 'string',
      group: 'join',
      initialValue: "Don't choose between a sleek experience and saving the planet.",
    }),
    defineField({
      name: 'joinSlogan',
      title: 'Join Slogan',
      type: 'string',
      group: 'join',
      initialValue: 'Bank Green. Live Clean.',
    }),
    defineField({
      name: 'trustBadges',
      title: 'Trust Badges',
      type: 'array',
      group: 'join',
      of: [{ type: 'string' }],
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
