import { client, queries } from '@/lib/sanity';
import { HomePageClient } from './HomePageClient';

// Server component that fetches data
async function getHomePageData() {
  try {
    const [homePage, impactSection] = await Promise.all([
      client.fetch(queries.homePage),
      client.fetch(`*[_type == "impactSection"][0]{ description, chartData }`),
    ]);
    return { homePage, impactSection };
  } catch (error) {
    console.error('Failed to fetch homepage data:', error);
    return { homePage: null, impactSection: null };
  }
}

export default async function HomePage() {
  const data = await getHomePageData();
  return <HomePageClient data={data} />;
}
