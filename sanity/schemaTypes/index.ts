import { homePage } from './homePage';
import { greenHub } from './greenHub';
import { teamMember } from './teamMember';
import { product } from './product';
import { faq } from './faq';
import { companyInfo } from './companyInfo';
import { impactSection } from './impactSection';
import { feature } from './feature';
import { aboutPage } from './aboutPage';

export const schemaTypes = [
  // Singletons
  homePage,
  greenHub,
  companyInfo,
  impactSection,
  aboutPage,
  // Collections
  teamMember,
  product,
  faq,
  feature,
];

// Singleton type names for structure builder
export const singletonTypes = ['homePage', 'greenHub', 'companyInfo', 'impactSection', 'aboutPage'];
