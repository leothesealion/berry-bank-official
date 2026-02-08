import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes, singletonTypes } from './schemaTypes';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

// Custom structure builder with singletons at top
const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      // Global
      S.listItem()
        .title('⚙️ Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('🏢 Company Info')
        .id('companyInfo')
        .child(
          S.document()
            .schemaType('companyInfo')
            .documentId('companyInfo')
        ),
      S.divider(),

      // Pages
      S.listItem()
        .title('🏠 Home Page')
        .id('homePage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
      S.listItem()
        .title('📊 Impact Page')
        .id('impactPage')
        .child(
          S.document()
            .schemaType('impactPage')
            .documentId('impactPage')
        ),
      S.listItem()
        .title('📈 Impact Section (Chart)')
        .id('impactSection')
        .child(
          S.document()
            .schemaType('impactSection')
            .documentId('impactSection')
        ),
      S.listItem()
        .title('🌿 Green Hub')
        .id('greenHub')
        .child(
          S.document()
            .schemaType('greenHub')
            .documentId('greenHub')
        ),
      S.listItem()
        .title('🎯 Mission Page')
        .id('missionPage')
        .child(
          S.document()
            .schemaType('missionPage')
            .documentId('missionPage')
        ),
      S.listItem()
        .title('📞 Contact Page')
        .id('contactPage')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
        ),
      S.listItem()
        .title('🛒 Shop Page')
        .id('shopPage')
        .child(
          S.document()
            .schemaType('shopPage')
            .documentId('shopPage')
        ),
      S.listItem()
        .title('ℹ️ About Page')
        .id('aboutPage')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
      S.divider(),

      // Collections
      S.listItem()
        .title('⭐ Features')
        .schemaType('feature')
        .child(S.documentTypeList('feature').title('Features')),
      S.listItem()
        .title('👥 Team Members')
        .schemaType('teamMember')
        .child(S.documentTypeList('teamMember').title('Team Members')),
      S.listItem()
        .title('📦 Products')
        .schemaType('product')
        .child(S.documentTypeList('product').title('Products')),
      S.listItem()
        .title('❓ FAQs')
        .schemaType('faq')
        .child(S.documentTypeList('faq').title('FAQs')),
    ]);

export default defineConfig({
  name: 'berry-bank-studio',
  title: 'Berry Bank Studio',
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
  ],
  schema: {
    types: schemaTypes,
    // Prevent creating new singleton documents
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
  },
  document: {
    // Prevent deleting singleton documents
    actions: (input, context) =>
      singletonTypes.includes(context.schemaType)
        ? input.filter(({ action }) => action !== 'delete' && action !== 'duplicate')
        : input,
  },
  basePath: '/studio',
});
