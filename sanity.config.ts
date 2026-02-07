import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { colorInput } from '@sanity/color-input';
import { schemaTypes, singletonTypes } from './sanity/schemaTypes';

// Build singleton Set for filtering
const singletonTypeSet = new Set(singletonTypes);

const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      // Singletons section
      S.listItem()
        .title('Site Configuration')
        .child(
          S.list()
            .title('Site Configuration')
            .items([
              S.listItem()
                .title('Company Info')
                .child(
                  S.document()
                    .schemaType('companyInfo')
                    .documentId('companyInfo')
                ),
              S.listItem()
                .title('Home Page')
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('homePage')
                ),
              S.listItem()
                .title('About Page')
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                ),
              S.listItem()
                .title('Impact Section')
                .child(
                  S.document()
                    .schemaType('impactSection')
                    .documentId('impactSection')
                ),
              S.listItem()
                .title('Green Hub')
                .child(
                  S.document()
                    .schemaType('greenHub')
                    .documentId('greenHub')
                ),
            ])
        ),
      S.divider(),
      // Regular document types
      ...S.documentTypeListItems().filter(
        (listItem: any) => !singletonTypeSet.has(listItem.getId())
      ),
    ]);

export default defineConfig({
  name: 'default',
  title: 'Berry Bank CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({ structure }),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },

  // Prevent deletion/duplication of singletons
  document: {
    actions: (prev, { schemaType }) => {
      if (singletonTypeSet.has(schemaType)) {
        return prev.filter(
          (action) => !['unpublish', 'delete', 'duplicate'].includes(action.action || '')
        );
      }
      return prev;
    },
  },
});