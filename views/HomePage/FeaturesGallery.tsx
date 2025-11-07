import React, { useState } from 'react';
import styled from 'styled-components';
import Collapse from 'components/Collapse';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
// replaced ThreeLayersCircle with a numbered badge
import { media } from 'utils/media';

const TABS = [
  {
    title: 'How does the "No Win, No Fee" arrangement work?',
    description:
      '<p>We operate on a contingency fee basis, meaning you pay no upfront costs for our services. Our fee is a percentage of the amount recovered, agreed upon before we begin your case. If we don’t win or recover funds on your behalf, you owe us nothing.</p>',
    baseColor: '249,82,120',
    secondColor: '221,9,57',
  },
  {
    title: 'Do I need to be located in the same country as Player Protection Legal to use your services?',
    description:
      '<p>No, we serve clients internationally. Thanks to digital communication, we can represent players from all over the world. Our expertise in international gambling law allows us to handle cases involving casinos based in different jurisdictions.</p>',
    baseColor: '57,148,224',
    secondColor: '99,172,232',
  },
  {
    title: 'What jurisdictions do you cover in your legal services?',
    description:
      '<p>We specialize in cases involving online casinos operating under licenses from jurisdictions like Curaçao, Costa Rica, Panama, and other grey market regions. Our team is well-versed in international law, enabling us to assist clients across Europe and beyond.</p>',
    baseColor: '88,193,132',
    secondColor: '124,207,158',
  },
  {
    title: 'What information should I provide during the initial consultation?',
    description:
      '<ul><li><strong>Communication Records:</strong> Emails, chat logs, or any correspondence with the casino.</li><li><strong>Transaction History:</strong> Proof of deposits, withdrawals, and any disputed amounts.</li><li><strong>Terms and Conditions:</strong> Copies or links to the casino’s terms at the time of your account creation.</li><li><strong>Relevant Documents:</strong> Any additional evidence that supports your claim.</li></ul>',
    baseColor: '249,140,64',
    secondColor: '245,115,54',
  },
  {
    title: 'How long does it typically take to resolve a case?',
    description:
      '<p>The duration varies depending on the complexity of your case and the responsiveness of the casino. Some disputes are resolved within weeks through negotiation, while others may take several months if legal action is necessary.</p>',
    baseColor: '149,102,255',
    secondColor: '120,86,230',
  },
  {
    title: 'Is my personal information safe with your firm?',
    description:
      '<p>Absolutely. We adhere to strict confidentiality protocols and data protection laws. Your personal information is used solely for your case and is not shared with unauthorized parties.</p>',
    baseColor: '88,193,132',
    secondColor: '124,207,158',
  },
  {
    title: 'Can you assist if I played at an unlicensed or illegal online casino?',
    description:
      '<p>Yes, we can evaluate your situation. While recovering funds from unlicensed or illegal casinos can be challenging, our expertise in dealing with such entities allows us to advise you on the best possible course of action.</p>',
    baseColor: '57,148,224',
    secondColor: '99,172,232',
  },
  {
    title: 'What if the online casino is based in a different country?',
    description:
      '<p>Our team specializes in international gambling law and can handle cases involving casinos based abroad. We navigate cross-border legal complexities to advocate effectively on your behalf.</p>',
    baseColor: '249,82,120',
    secondColor: '221,9,57',
  },
  {
    title: 'Do you handle cases related to self-exclusion violations or gambling addiction?',
    description:
      '<p>Yes, we assist clients when casinos fail to honor self-exclusion agreements or engage in practices that exploit gambling addiction. We can take legal action to hold these casinos accountable for their negligence.</p>',
    baseColor: '149,102,255',
    secondColor: '120,86,230',
  },
  {
    title: 'What if I inadvertently violated the casino\'s terms and conditions?',
    description:
      '<p>Each case is unique. During your free initial consultation, we’ll assess the specifics of your situation. Even if you’ve violated certain terms, the casino may still have legal obligations they must uphold. We’ll advise you on your options.</p>',
    baseColor: '88,193,132',
    secondColor: '124,207,158',
  },
  {
    title: 'How will we communicate throughout the legal process?',
    description:
      '<p>We offer flexible communication methods, including email, phone calls, and video conferencing. We’ll provide regular updates and are always available to answer your questions.</p>',
    baseColor: '57,148,224',
    secondColor: '99,172,232',
  },
  {
    title: 'Do you represent clients under the age of 18?',
    description:
      '<p>We cannot represent minors directly. If you are under 18, please have a parent or legal guardian contact us to discuss potential representation.</p>',
    baseColor: '249,140,64',
    secondColor: '245,115,54',
  },
  {
    title: 'Do you offer services to online casinos or only to players?',
    description:
      '<p>We are dedicated exclusively to representing players. We do not provide legal services to online casinos, ensuring our commitment to advocating for individual player rights without conflicts of interest.</p>',
    baseColor: '149,102,255',
    secondColor: '120,86,230',
  },
  {
    title: 'How do I get started with Player Protection Legal?',
    description:
      '<p>Simply contact us via our online form, email, or phone to schedule your <strong>free initial consultation</strong>. We’ll discuss your case confidentially and advise you on the next steps—all with no obligation and no upfront fees.</p>',
    baseColor: '249,82,120',
    secondColor: '221,9,57',
  },
];

export default function FeaturesGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;

    return (
      <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          <CircleContainer>
            <NumberBadge isActive={isActive}>{idx + 1}.</NumberBadge>
          </CircleContainer>
          <h4>{singleTab.title}</h4>
        </TabTitleContainer>
        <Collapse isOpen={isActive} duration={300}>
          <TabContent>
            <div dangerouslySetInnerHTML={{ __html: singleTab.description }}></div>
          </TabContent>
        </Collapse>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  return (
    <FeaturesGalleryWrapper>
      <Content>
        <OverTitle>services</OverTitle>
        <SectionTitle>What are you signing up for?</SectionTitle>
      </Content>
      <GalleryWrapper>
        <TabsContainer>{tabsMarkup}</TabsContainer>
      </GalleryWrapper>
    </FeaturesGalleryWrapper>
  );
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;

const TabsContainer = styled.div`
  flex: 1;
  margin-right: 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=desktop')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 2rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  cursor: pointer;
  border-radius: 0.8rem;
  transition: box-shadow 0.18s, transform 0.12s;

  /* make tabs larger/wider by default and keep same size when active */
  min-width: 36rem;
  font-size: 1.65rem;
  font-weight: 700;

  ${media('<=desktop')} {
    width: 100%;
    min-width: auto;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  flex: 0 0 auto;
  ${media('<=tablet')} {
    margin-right: 0.75rem;
  }
`;

const NumberBadge = styled.div<{ isActive?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 999px;
  background: ${(p) => (p.isActive ? 'rgb(var(--primary))' : 'transparent')};
  color: ${(p) => (p.isActive ? 'white' : 'rgb(var(--muted))')};
  border: 1.5px solid rgba(0,0,0,0.06);
  font-weight: 700;
  font-size: 1.25rem;
`;
