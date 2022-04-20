import React from 'react'
import styled from 'styled-components'
import { AutoColumn } from '../../components/Column';
import TermAndPolicyCard from '../../components/TermAndPolicyCard';
import { Text } from 'rebass'

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  background-color: ${({ theme }) => theme.bg2};
  border-radius: 20px;
  margin: 1rem;
`

const ContentWrapper = styled.div`

`

export default function PrivacyPolicy() {
  return (
    <>
      <TitleWrapper>
        <AutoColumn gap="lg">
          <Text fontWeight={500} fontSize={20}>
            {'SEADEX PRIVACY POLICY'}
          </Text>
        </AutoColumn>
      </TitleWrapper>
      <ContentWrapper>
        <TermAndPolicyCard title={'WE VALUE YOUR PRIVACY'} description={<>
          We value the privacy of individuals who visit our website at <a href='https://seascape.finance/#/swap' style={{ color: 'white' }}>https://seascape.finance/#/swap</a> (the “<strong>Website</strong>”), and any of our other applications, or Services that link to this Privacy Policy (collectively, the "<strong>Services</strong>"). This Privacy Policy ("<strong>Policy</strong>") is designed to explain how we collect, use, and share information from users of the Services. This Policy is incorporated by reference into our Terms of Services. By agreeing to this Policy through your continued use of the Services, you agree to the terms and conditions of this Policy.
        </>} notFullWidth
        />
        <TermAndPolicyCard title={'WHAT TYPE OF INFORMATION WE COLLECT?'} description={<>
          We collect any information you provide to us when you use the Services. You may provide us with information in various ways on the Services.
        </>} notFullWidth
        />
        <TermAndPolicyCard title={'[C1] WE COLLECT COOKIES'} description={<>
          When you use our Services, we may collect information from you through automated means, such as cookies, web beacons, and web server logs. By using the Services, you consent to the placement of cookies, beacons, and similar technologies in your browser and on emails in accordance with this Policy. The information collected in this manner includes IP address, browser characteristics, device IDs and characteristics, operating system version, language preferences, referring URLs, and information about the usage of our Services.
          <br />
          <br />
          We may use this information, for example, to ensure that the Services functions properly, to determine how many users have visited certain pages or opened messages, or to prevent fraud. We also work with analytics providers which use cookies and similar technologies to collect and analyze information about use of the Services and report on activities and trends. If you do not want information collected through the use of cookies, there is a procedure in most browsers that allows you to automatically decline cookies or be given the choice of declining or accepting the transfer to your computer of a particular cookie (or cookies) from a particular site. You may also wish to refer to <a href='http://www.allaboutcookies.org/manage-cookies/index.html' style={{ color: 'white' }}>http://www.allaboutcookies.org/manage-cookies/index.html</a>. If, however, you do not accept cookies, you may experience some inconvenience in your use of the Services.
        </>} notFullWidth
        />
        <TermAndPolicyCard title={'HOW DO WE USE THE INFORMATION WE COLLECT?'} description={<>
          <ul>
            <li>Operating, maintaining, enhancing and providing features of the Services, providing Services and information that you request, responding to comments and questions, and otherwise providing support to users.</li>
            <li>Understanding and analyzing the usage trends and preferences of our users, improving the Services, developing new products, Services, features, and functionality.</li>
            <li>For marketing purposes, such as developing and providing promotional and advertising materials that may be useful, relevant, valuable or otherwise of interest.</li>
            <li>Personalizing your experience on the Services by presenting tailored content.</li>
            <li>We may aggregate data collected through the Services and may use and disclose it for any purpose.</li>
            <li>For our business purposes, such as audits, security, compliance with applicable laws and regulations, fraud monitoring and prevention.</li>
            <li>Complying with legal and regulatory requirements.</li>
            <li>Protecting our interests, enforcing our Terms of Services or other legal rights.</li>
          </ul>
        </>}
        />
        <TermAndPolicyCard title={'WHEN AND WITH WHOM DO WE SHARE THE INFORMATION WE COLLECT?'} description={<>
          We do not rent, sell or share your information with third parties except as described in this Policy. We may share your information with the following:
          <br />
          <br />
          <ul>
            <li>Entities in our group or our affiliates in order to provide you with the Services.</li>
            <li>Our third-party Services providers who provide Services such as website hosting, data analysis, customer Services, email delivery, auditing, and other Services.</li>
            <li>Credit bureaus and other third parties who provide Know Your Customer and Anti-Money Laundering Services.</li>
            <li>Potential or actual acquirer, successor, or assignee as part of any reorganization, merger, sale, joint venture, assignment, transfer or other disposition of all or any portion of our business, assets or stock (including in bankruptcy or similar proceedings).</li>
            <li>If required to do so by law or in the good faith belief that such action is appropriate: (a) under applicable law, including laws outside your country of residence; (b) to comply with legal process; (c) to respond to requests from public and government authorities, including public and government authorities outside your country of residence; (d) to enforce our terms and conditions; (e) to protect our operations or those of any of our subsidiaries; (f) to protect our rights, privacy, safety or property, and/or that of our subsidiaries, you or others; and (g) to allow us to pursue available remedies or limit the damages that we may sustain.</li>
          </ul>
          <br />
          <br />
          In addition, we may use third party analytics vendors to evaluate and provide us with information about your use of the Services. We do not share your information with these third parties, but these analytics Services providers may set and access their own cookies, pixel tags and similar technologies on the Services and they may otherwise collect or have access to information about you which they may collect over time and across different websites. For example, we use Google Analytics to collect and process certain analytics data. Google provides some additional privacy options described at <a href='https://seascape.finance/#/swap' style={{ color: 'white' }}>https://www.google.com/policies/privacy/partners</a>.
          <br />
          We may use and disclose aggregate information that does not identify or otherwise relate to an individual for any purpose, unless we are prohibited from doing so under applicable law.
        </>}
        />
        <TermAndPolicyCard title={'THIRD-PARTY SERVICES'} description={<>
          We may display third-party content on the Services. Third-party content may use cookies, web beacons, or other mechanisms for obtaining data in connection with your viewing of and/or interacting with the third-party content on the Services.
          <br />
          <br />
          You should be aware that there is always some risk involved in transmitting information over the internet. While we strive to protect your Personal Information, we cannot ensure or warrant the security and privacy of your Personal Information or other content you transmit using the Services, and you do so at your own risk.
          <br />
          <br />
          Please note that we cannot control, nor will we be responsible for the Personal Information collected and processed by third parties, its safekeeping or a breach thereof, or any other act or omission pertaining to it and their compliance with applicable privacy laws or regulations. We advise you to read the respective privacy policy of any such third party and use your best discretion.
        </>}
        />
        <TermAndPolicyCard title={'[C2] HOW LONG DO WE KEEP YOUR INFORMATION?'} description={<>
          We will retain your Information for as long as necessary to provide our Services, and as necessary to comply with our legal obligations (including those specific to financial transactions), resolve disputes, and enforce our policies. Retention periods will be determined taking into account the type of information that is collected and the purpose for which it is collected, bearing in mind the requirements applicable to the situation and the need to destroy outdated, unused information at the earliest reasonable time.
        </>}
        />
        <TermAndPolicyCard title={'YOUR RIGHTS'} description={<>
          You may, of course, decline to share certain information with us, in which case we may not be able to provide to you some of the features and functionality of the Services. From time to time, we send marketing e-mail messages to our users, including promotional material concerning our Services. If you no longer want to receive such emails from us on a going forward basis, you may opt-out via the "unsubscribe" link provided in each such email.
        </>}
        />
        <TermAndPolicyCard title={'NO USE OF SERVICES BY MINORS'} description={<>
          The Services is not directed to individuals under the age of eighteen (18), and we request that you do not provide personal information through the Services if you are under 18.
        </>}
        />
        <TermAndPolicyCard title={'CROSS-BORDER DATA TRANSFER'} description={<>
          Please note that we may be transferring your information outside of your region for storage and processing and around the globe. By using the Services you consent to the transfer of information to countries outside of your country of residence, which may have data protection rules that are different from those of your country.
        </>}
        />
        <TermAndPolicyCard title={'UPDATES TO THIS PRIVACY POLICY'} description={<>
          We may make changes to this Policy. The "Last Updated" date at the bottom of this page indicates when this Policy was last revised. If we make material changes, we may notify you through the Services or by sending you an email or other communication. The most current version will always be posted on our website. We encourage you to read this Policy periodically to stay up-to-date about our privacy practices. By continuing to access or use our Services after any revisions become effective, you agree to be bound by the updated Policy.
        </>}
        />
        <TermAndPolicyCard title={'CONTACT US'} description={<>
          If you have any questions about this Policy, please contact us at <a href="mailto:info@seascape.network" style={{ color: 'white' }}>info@seascape.network</a>.
        </>}
        />
        <TitleWrapper>
          <AutoColumn gap="lg">
            <Text fontWeight={500} fontSize={20}>
              {'LAST UPDATED ON [19/04] 2022'}
            </Text>
          </AutoColumn>
        </TitleWrapper>
      </ContentWrapper>
    </>
  );
}