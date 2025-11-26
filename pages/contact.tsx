import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  return (
    <Page
      title="Contact"
      description="Get a free consultation from Casino-Disputes.com. Our global legal network forces dishonest casinos to return what they owe. No-Win, No-Fee."
    >
      <ContactContainer>
        <InformationSection />
        <FormSection />
      </ContactContainer>
    </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const Intro = styled.p`
  flex-basis: 100%;
  font-size: 1.8rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 2.5rem;

  ${media('<=tablet')} {
    font-size: 1.6rem;
  }
`;
