import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import Cta from 'views/HomePage/Cta';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Casino Disputes</title>
        <meta
          name="description"
          content="Casino-Disputes.com - Global legal network that forces dishonest online casinos to return what they owe. No-Win, No-Fee Recovery."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://casino-disputes.vercel.app/" />
        <meta property="og:title" content="Casino-Disputes.com | Global Legal Network" />
        <meta
          property="og:description"
          content="We force dishonest online casinos to return what they owe. No-Win, No-Fee Recovery. Proven success in over 1,000 cases."
        />
        <meta property="og:image" content="https://casino-disputes.vercel.app/justice.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://casino-disputes.vercel.app/" />
        <meta property="twitter:title" content="Casino-Disputes.com | Global Legal Network" />
        <meta
          property="twitter:description"
          content="We force dishonest online casinos to return what they owe. No-Win, No-Fee Recovery. Proven success in over 1,000 cases."
        />
        <meta property="twitter:image" content="https://casino-disputes.vercel.app/justice.png" />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/demo-illustration-1.png" title="Our Global Reach & Track Record" overTitle="Who we are">
            <ul>
              <li>Legal partners spanning multiple jurisdictions worldwide</li>
              <li>Specialized expertise in offshore operators</li>
              <li>Successful recoveries for players across continents</li>
              <li>Comprehensive understanding of international gambling regulations</li>
              <li>Proven success in over 1,000 cases</li>
              <li>Resolution-focused approach prioritizing fast settlements</li>
              <li>Persistent advocacy with battles fought for up to 2 years when necessary</li>
            </ul>
          </BasicSection>

          <BasicSection
            imageUrl="/demo-illustration-8.png"
            title="These Casino Tricks Have Met Their Match"
            overTitle="Casino Scam vs Our Legal Counter-Attack"
            reversed
          >
            <ul>
              <li>
                <strong>Ignored self-exclusion</strong> → Full refund under duty of care laws
              </li>
              <li>
                <strong>"Bonus abuse" accusations</strong> → Unfair terms invalidated
              </li>
              <li>
                <strong>Withdrawals blocked "under review"</strong> → Immediate regulator escalation
              </li>
              <li>
                <strong>Account locked with balance</strong> → Chargeback + civil claim combination
              </li>
              <li>
                <strong>Addiction exploitation</strong> → Maximum available damages pursued
              </li>
            </ul>
          </BasicSection>

          <BasicSection imageUrl="/signing.png" title="Holding Offshore Casinos Accountable" overTitle="What we do">
            <p>We've successfully challenged the most problematic offshore platforms, including:</p>
            <ul>
              <li>Curacao-licensed casino networks</li>
              <li>Crypto-only gambling platforms</li>
              <li>Unregulated sports betting sites</li>
              <li>Jurisdiction-hopping operators</li>
            </ul>
            <p>
              Learn more on our <Link href="/services">services</Link> page or <Link href="/contact">get a free consultation</Link> to
              discuss your situation.
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

// Blog posts removed — no getStaticProps required
