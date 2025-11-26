import Head from 'next/head';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import SectionTitle from './SectionTitle';

export interface PageProps {
  title: string;
  description?: string;
}

export default function Page({ title, description, children }: PropsWithChildren<PageProps>) {
  const fullTitle = `${title} | Casino Disputes`;
  const metaDescription =
    description || 'Casino-Disputes.com - Global legal network that forces dishonest online casinos to return what they owe.';

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://casino-disputes.vercel.app/" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://casino-disputes.vercel.app/justice.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content="https://casino-disputes.vercel.app/justice.png" />
      </Head>
      <Wrapper>
        <HeaderContainer>
          <Container>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
          </Container>
        </HeaderContainer>
        <Container>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: rgb(var(--background));
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(var(--secondary));
  min-height: 40rem;
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 2rem;
`;

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
  text-align: center;
  max-width: 60%;
  margin: auto;

  ${media('<=tablet')} {
    max-width: 100%;
  }
`;

const ChildrenWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
`;
