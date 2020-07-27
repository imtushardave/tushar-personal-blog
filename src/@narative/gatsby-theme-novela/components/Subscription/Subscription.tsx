import addToMailchimp from "gatsby-plugin-mailchimp";
import React, { useState } from "react";

import Section from "@components/Section";
import Headings from "@components/Headings";


import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const Subscription: React.FC<{}> = () => {
  

  function btnClick() {
    window.open("https://imtushardave.substack.com/welcome");
  }

  return (
    <Section narrow>
      <SubscriptionContainer>
        <Content >
      
          <Image src={ require('./sunday-diaries.png') } />
          <Heading>
            Sunday Diaries
          </Heading>
          <Text>
            Every sunday I reflect and share my thoughts over what happened 
            during the week including some interesting stuff that I found on Internet.
             <i> If this sound interesting to you,</i> you will enjoy reading my Sunday Diaries. 
             <b> Subscribe</b> and I promise you will enjoy your sunday's with me.
          </Text>

          <Text><b>No Spam | Unsubscribe Anytime</b></Text>
        
          <Button
              subscribed={false}
              hasError=""
              onClick={btnClick}
            >Subscribe</Button>
          
        </Content>
      </SubscriptionContainer>
    </Section>
  );
};

export default Subscription;

const SubscriptionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 64px 0 55px;
  margin: 60px auto 50px;
  background: ${p => p.theme.colors.card};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  z-index: 1;

  ${mediaqueries.tablet`
    padding: 50px 0 0;
    text-align: center;
  `}

  ${mediaqueries.phablet`
    margin: -20px auto 80px;
  `}
`;


const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;

  ${mediaqueries.tablet`
    h3 {
      padding: 0 50px;
    }
  `}

  ${mediaqueries.phone`
    h3 {
      padding: 0 24px;
    }
  `}
`;

const Image = styled.img`
  margin: 0 auto;
  height:100px;
  display: flex;
  justify-content: center;
  align-self: center;
  

  ${mediaqueries.tablet`
    h3 {
      padding: 0 50px;
    }
  `}

  ${mediaqueries.phone`
    h3 {
      padding: 0 24px;
    }
  `}
`;

const Heading = styled(Headings.h2)`
  margin-bottom: 20px;
  text-align: center;
  
  ${mediaqueries.tablet`
    margin-bottom: 15px;
  `}
`;

const Text = styled.p`
  margin: 0 auto 30px;
  text-align: center;
  color: ${p => p.theme.colors.grey};
  line-height: 1.75;

  ${mediaqueries.tablet`
    padding: 0 26px;
    margin: 0 auto 25px;
  `}
`;

const Button = styled.button<{ hasError: string; subscribed: boolean }>`
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 161px;
  height: 38px;
  border: 1px solid
    ${p => (p.hasError ? p.theme.colors.error : p.theme.colors.accent)};
  color: ${p => (p.hasError ? p.theme.colors.error : p.theme.colors.accent)};
  background: ${p => (p.subscribed ? p.theme.colors.accent : "transparent")};
  font-weight: 600;
  border-radius: 35px;
  letter-spacing: 0.42px;
  transition: border-color 0.2s var(--ease-in-out-quad),
    background 0.2s var(--ease-in-out-quad), color 0.2s var(--ease-in-out-quad);

  &:hover {
    background: ${p =>
      p.hasError ? p.theme.colors.error : p.theme.colors.accent};
    color: ${p => p.theme.colors.background};
  }

  &[disabled] {
    cursor: not-allowed;
  }

  svg * {
    fill: ${p => p.theme.colors.background};
  }

  ${p => mediaqueries.tablet`
    position: relative;
    height: 60px;
    width: 100%;
    top: 0;
    left: 0;
    border: none;
    border-radius: 0;
    border-top: 1px solid ${p.theme.colors.horizontalRule};

    &:hover {
      color: initial;
      background: initial;
    }
  `}
`;

