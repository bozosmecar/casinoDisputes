import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function WaveCta() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#0A121E"
          fillOpacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,197.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <CtaWrapper>
        <Container>
          <Title>Contact Us 24/7</Title>
          <Email>contact@casino-disputes.com</Email>
          <Divider>OR</Divider>
          <ConsultationTitle>Get Your Free Consultation!</ConsultationTitle>
          <CustomButtonGroup>
            <NextLink href="/contact" passHref>
              <Button as="a">
                REQUEST APPOINTMENT <span>&rarr;</span>
              </Button>
            </NextLink>
          </CustomButtonGroup>
        </Container>
      </CtaWrapper>
    </>
  );
}

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
  margin-top: -1rem;
  padding-bottom: 16rem;

  ${media('<=tablet')} {
    padding-top: 8rem;
  }
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 2rem;
`;

const Email = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: rgb(var(--textSecondary));
  margin-bottom: 1.5rem;
  text-align: center;
  word-break: break-all;

  ${media('<=tablet')} {
    font-size: 1.6rem;
  }

  ${media('<=phone')} {
    font-size: 1.4rem;
  }
`;

const Divider = styled.p`
  font-size: 1.4rem;
  color: rgba(var(--textSecondary), 0.6);
  margin: 1.5rem 0;
  text-align: center;
`;

const ConsultationTitle = styled.h3`
  font-size: 2.8rem;
  font-weight: bold;
  color: rgb(var(--textSecondary));
  margin-bottom: 2rem;
  text-align: center;

  ${media('<=tablet')} {
    font-size: 2rem;
  }

  ${media('<=phone')} {
    font-size: 1.6rem;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
  margin-top: 2rem;
`;
