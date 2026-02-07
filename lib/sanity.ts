import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Queries
export const queries = {
  homePage: `*[_type == "homePage"][0]{
    heroHeadline,
    heroSubline,
    heroHook,
    ctaText
  }`,
  greenHub: `*[_type == "greenHub"][0]{
    embedUrl,
    title,
    description
  }`,
  teamMembers: `*[_type == "teamMember"] | order(order asc){
    _id,
    name,
    role,
    image,
    bio
  }`,
  products: `*[_type == "product"]{
    _id,
    title,
    slug,
    price,
    image,
    description,
    stripePriceId,
    featured
  }`,
  faqs: `*[_type == "faq"] | order(order asc){
    _id,
    question,
    answer
  }`,
};
