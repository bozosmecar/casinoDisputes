import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import RichText from 'components/RichText';
import Container from 'components/Container';
import BasicSection from 'components/BasicSection';

const FEATURES = [
  {
    imageUrl: '/legal_action.png',
    title: 'Legal Action Against Fraudulent Casinos',
    description:
      'Fight back against illegal gambling operators. When online casinos engage in illegal practices such as withholding winnings, refusing payouts, or manipulating gameplay, we are prepared to take legal action on your behalf.',
  },
  {
    imageUrl: '/recovery.png',
    title: 'Recovery of Unpaid Winnings',
    description:
      'Secure the money you’ve rightfully earned. We specialise in helping players recover winnings that have been unfairly withheld by online casinos—whether due to unclear terms or unresponsive support.',
  },
  {
    imageUrl: '/data.png',
    title: 'Data Privacy Issues',
    description:
      'Legal help for data breaches and privacy violations. If an online casino has misused or leaked your personal information, we’ll take action to defend your privacy rights and seek remedies.',
  },
  {
    imageUrl: '/dispute.png',
    title: 'Dispute Resolution',
    description:
      'Resolve your casino issues without the hassle. We specialise in mediating fair and just resolutions between players and online casinos—saving you time, stress and money.',
  },
  {
    imageUrl: '/chargeback.png',
    title: 'Chargeback Assistance',
    description:
      'Reclaim unjust charges from online casinos. Our chargeback assistance service helps reverse unfair transactions and recover funds without endless delays or denials.',
  },
  {
    imageUrl: '/regulatory.png',
    title: 'Regulatory Complaints & Cross-Border Action',
    description:
      'We file complaints with international regulatory bodies and pursue cross-border solutions when appropriate to hold unethical operators accountable.',
  },
];

export default function ServicesPage() {
  return (
    <Page title="Services" description="Legal services to help players dispute unfair online casino practices.">
      <Wrapper>
        <ArticlesSection>
          <StyledContainer>
            <MainTitle>Why You May Need the Top Lawyers</MainTitle>
            <IntroText>
              <LetterA>A</LetterA>
              <span>
                t Player Protection Legal, we offer a comprehensive range of legal services tailored to defend players against unfair practices by online casinos. With over 12 years of specialized experience, our team is dedicated to securing your rights and winnings. Explore our key service areas below to discover how we can assist you
              </span>
            </IntroText>
          </StyledContainer>
        </ArticlesSection>
        <h1 style={{ fontSize: '5.2rem' }}>Our Key Services</h1>
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
        <BasicSection
          imageUrl="/menWalking.jpg"
          title="Player Protection & Legal Expertise"
          overTitle="First Section"
        >
          <p>
            At Player Protection Legal, we specialize in defending players against unfair practices by online casinos. Our experienced team has over 12 years of expertise in navigating complex gaming disputes and securing favorable outcomes for our clients.
          </p>
        </BasicSection>
        <BasicSection
          imageUrl="/lawyer.png"
          title="Comprehensive Dispute Resolution"
          overTitle="Second Section"
          reversed
        >
          <p>
            We offer comprehensive dispute resolution services to help you recover your winnings and protect your rights. Whether you&apos;re facing withdrawal issues, account access problems, or bonus disputes, our team is here to help.
          </p>
        </BasicSection>
        <StyledContainer>
          <SubHeading>Why Unlicensed and Grey Market Casinos Pose a Risk</SubHeading>
          <RichText>
            <ul>
              <li>
                <strong>Lack of Robust Regulation:</strong> Casinos licensed in jurisdictions like Curaçao, Costa Rica, or Panama may not be subject to strict regulatory standards, allowing unethical practices to go unchecked.
              </li>
              <li>
                <strong>Unfair Terms and Conditions:</strong> These platforms might impose unreasonable wagering requirements, withdrawal limits, or obscure clauses that disadvantage players.
              </li>
              <li>
                <strong>Limited Legal Recourse:</strong> Players often face challenges pursuing justice due to the international nature of these casinos and the complexities of cross-border laws.
              </li>
              <li>
                <strong>Data Privacy Concerns:</strong> Inadequate oversight can lead to poor data protection measures, risking your personal and financial information.
              </li>
            </ul>
          </RichText>

          <SubHeading>How We Can Assist You</SubHeading>
          <RichText>
            <ul>
              <li><strong>Comprehensive Case Evaluation:</strong> We&apos;ll assess your situation thoroughly to determine the most effective legal strategy.</li>
              <li><strong>No Upfront Fees:</strong> We operate on a contingency basis—you pay only after we successfully resolve your case and recover your winnings.</li>
              <li><strong>Direct Action Against Casinos:</strong> We initiate legal proceedings or negotiate settlements with unlicensed or grey market casinos on your behalf.</li>
              <li><strong>Regulatory Complaints:</strong> We file formal complaints with international regulatory bodies to expose unethical practices and seek broader industry changes.</li>
              <li><strong>Data Privacy Enforcement:</strong> If your personal information has been compromised, we&apos;ll take action to address data breaches and secure remedies.</li>
            </ul>
          </RichText>

          
        </StyledContainer>
      </Wrapper>
    </Page>
  );
}

// Blog posts removed — no getStaticProps required

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const ArticlesSection = styled.div`
  margin-bottom: 4rem;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;
const MainTitle = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 3rem;
  letter-spacing: -0.03em;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }

  ${media('<=phone')} {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
  }
`;

const IntroText = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.8rem;
  line-height: 1.6;
  color: rgb(var(--text));
  opacity: 0.8;

  ${media('<=tablet')} {
    font-size: 1.6rem;
  }
`;

const LetterA = styled.span`
  font-size: 8rem;
  font-weight: bold;
  color: rgb(var(--primary));
  line-height: 1;
  flex-shrink: 0;
  padding-top: 0.5rem;

  ${media('<=tablet')} {
    font-size: 5rem;
  }

  ${media('<=phone')} {
    font-size: 3.5rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const SubHeading = styled.h2`
  font-size: 2.6rem;
  margin-top: 4rem;
  margin-bottom: 1.25rem;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 2.1rem;
  }
`;

const ContactBlock = styled.div`
  margin-top: 4rem;
  padding: 2.5rem 0;
  border-top: 1px solid rgba(0,0,0,0.06);
`;

const ContactTitle = styled.h3`
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
`;

const ContactEmail = styled.div`
  font-size: 1.6rem;
  opacity: 0.9;
  a {
    color: rgb(var(--primary));
    text-decoration: underline;
  }
`;
