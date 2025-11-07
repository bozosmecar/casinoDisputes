import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import Cta from 'views/HomePage/Cta';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/demo-illustration-1.png" title="Protecting Your Rights Against Unfair Online Casinos" overTitle="Who we are">
            <p>
              At Player Protection Legal, we are a dedicated team of legal experts with over 12 years of experience in online casino
              disputes. Our mission is to protect players from unlawful terms and unfair practices, and to help recover funds that have
              been wrongfully withheld.
            </p>
            <p>
              We prioritise confidentiality and practical outcomes — starting with a free initial consultation and a results-driven,
              no-win, no-fee approach whenever appropriate.
            </p>
          </BasicSection>

          <BasicSection imageUrl="/demo-illustration-8.png" title="A clear, results-driven process" overTitle="Our approach" reversed>
            <p>
              We follow a simple four-step process designed to move your case forward quickly: a free consultation, a thorough case
              evaluation, a tailored legal strategy, and proactive action to recover funds or negotiate a settlement.
            </p>
            <ul>
              <li>Free initial consultation to assess your case</li>
              <li>In-depth case evaluation and evidence review</li>
              <li>Custom legal strategy tailored to your situation</li>
            </ul>
          </BasicSection>

          <BasicSection imageUrl="/signing.png" title="How we can help" overTitle="What we do">
            <p>
              Our services cover recovery of unpaid winnings, dispute resolution, chargeback assistance, data privacy matters, and
              legal action against operators with questionable practices. If a casino has treated you unfairly, we’ll explore every
              avenue to get your money back.
            </p>
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
