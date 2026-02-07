'use client';

import { SnapContainer, SnapSection } from '@/components/core';
import { Hero, GreenHubEmbed, MissionSection, ImpactChart, JoinSection, FooterSection } from '@/components/modules';

interface HomePageData {
  homePage: {
    heroHeadline?: string;
    heroSubline?: string;
    heroHook?: string;
    ctaText?: string;
  } | null;
  impactSection: {
    description?: string;
    chartData?: Array<{
      label: string;
      value: number;
      color: string;
    }>;
  } | null;
}

interface HomePageClientProps {
  data: HomePageData;
}

export function HomePageClient({ data }: HomePageClientProps) {
  return (
    <>
      <SnapContainer>
        {/* Section 1: Hero - Berry Red with Reactive Background */}
        <SnapSection id="hero" background="berry">
          <Hero cmsData={data.homePage} />
        </SnapSection>

        {/* Section 2: Green Hub - White Embed Window */}
        <SnapSection id="green-hub" background="white">
          <GreenHubEmbed />
        </SnapSection>

        {/* Section 3: Mission & Vision */}
        <SnapSection id="mission" background="void">
          <MissionSection />
        </SnapSection>

        {/* Section 4: Impact Chart */}
        <SnapSection id="impact" background="void">
          <ImpactChart cmsData={data.impactSection} />
        </SnapSection>

        {/* Section 5: Join / Newsletter */}
        <SnapSection id="join" background="void">
          <JoinSection />
        </SnapSection>

        {/* Section 6: Footer */}
        <section id="footer" className="snap-start w-full">
          <FooterSection />
        </section>
      </SnapContainer>
    </>
  );
}
