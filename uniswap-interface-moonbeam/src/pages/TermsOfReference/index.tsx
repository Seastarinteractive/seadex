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

export default function TermsOfReference() {
  return (
    <>
      <TitleWrapper>
        <AutoColumn gap="lg">
          <Text fontWeight={500} fontSize={20}>
            {'SEADEX TERMS OF SERVICES'}
          </Text>
        </AutoColumn>
      </TitleWrapper>
      <ContentWrapper>
        <TermAndPolicyCard title={'1. General'} description={<>
          These terms and conditions (“<strong>Terms</strong>”) govern the use of the Website (defined below)
          and the Services (defined below). These Terms also include any guidelines, announcements, additional terms, policies, and disclaimers made available or
          issued by us from time to time. These Terms constitute a binding and enforceable legal contract between Seastar Interactive Limited [C1] and
          its affiliates (“<strong>Company</strong>”, “<strong>Seadex</strong>”, “<strong>we</strong>”, “<strong>us</strong>”) and you, an end user of the services
          (“<strong>you</strong>” or “<strong>User</strong>”) at <a href='https://seascape.finance/#/swap' style={{ color: 'white' }}>https://seascape.finance/#/swap</a> (“<strong>Services</strong>”). By accessing, using or clicking
          on our website (and all related subdomains) or its mobile applications (“<strong>Website</strong>”) or accessing, using or attempting to use the Services,
          you agree that you have read, understood, and to are bound by these Terms and that you comply with the requirements listed herein. If you do not agree to
          all of these Terms or comply with the requirements herein, please do not access or use the Website or the Services. In addition, when using some features
          of the Services, you may be subject to specific additional terms and conditions applicable to those features.
          <br />
          <br />
          We may modify, suspend or discontinue the Website or the Services at any time and without notifying you. We may also change, update, add or remove provisions of these Terms from time to time. Any and all modifications or changes to these Terms will become effective upon publication on our Website or release to Users. Therefore, your continued use of our Services is deemed your acceptance of the modified Terms and rules. If you do not agree to any changes to these Terms, please do not access or use the Website or the Services. We note that these Terms between you and us do not enumerate or cover all rights and obligations of each party, and do not guarantee full alignment with needs arising from future development. Therefore, our privacy policy, platform rules, guidelines and all other agreements entered into separately between you and us are deemed supplementary terms that are an integral part of these Terms and shall have the same legal effect. Your use of the Website or Services is deemed your acceptance of any supplementary terms too.
        </>} notFullWidth
        />
        <TermAndPolicyCard title={'2. Eligibility'} description={<>
          By accessing, using or clicking on our Website and using or attempting to use our Services, you represent and warrant that:
          <br />
          <ol type="a">
            <li>as an individual, legal person, or other organization, you have full legal capacity and authority to agree and bind yourself to these Terms;</li>
            <br />
            <li>you are at least 18 or are of legal age to form a binding contract under applicable laws;</li>
            <br />
            <li>your use of the Services is not prohibited by applicable law, and at all times compliant with applicable law, including but not limited to regulations on anti-money laundering, anti-corruption, and counter-terrorist financing (“<strong>CTF</strong>”);</li>
            <br />
            <li>you have not been previously suspended or removed from using our Services;</li>
            <br />
            <li>if you act as an employee or agent of a legal entity, and enter into these Terms on their behalf, you represent and warrant that you have all the necessary rights and authorizations to bind such legal entity; and</li>
            <br />
            <li>you are solely responsible for use of the Services and, if applicable, for all activities that occur on or through your user account.</li>
          </ol>
        </>} notFullWidth
        />
        <TermAndPolicyCard title={'3. Restrictions'} description={<>
          You shall not access, use or click on our Website and/or use or attempt to use the Services in any manner except as expressly permitted in these Terms. Without limiting the generality of the preceding sentence, you may NOT:
          <br />
          <ol type="a">
            <li>use our Website or use the Services in any dishonest or unlawful manner, for fraudulent or malicious activities, or in any manner inconsistent with these Terms;</li>
            <br />
            <li>violate applicable laws or regulations in any manner;</li>
            <br />
            <li>infringe any proprietary rights, including but not limited to copyrights, patents, trademarks, or trade secrets of Seadex;</li>
            <br />
            <li>use our Website or use the Services to transmit any data or send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware, or any other harmful programmes or computer code designed to adversely affect the operation of any computer software or hardware;</li>
            <br />
            <li>use any deep linking, web crawlers, bots, spiders or other automatic devices, programs, scripts, algorithms or methods, or any similar or equivalent manual processes to access, obtain, copy, monitor, replicate or bypass the Website or the Services;</li>
            <br />
            <li>make any back-up or archival copies of the Website or any part thereof, including disassembling or de-compilation of the Website;</li>
            <br />
            <li>violate public interests, public morals, or the legitimate interests of others, including any actions that would interfere with, disrupt, negatively affect, or prohibit other Users from using our Website and the Services;</li>
            <br />
            <li>use the Services for market manipulation (such as pump and dump schemes, wash trading, self-trading, front running, quote stuffing, and spoofing or layering, regardless of whether prohibited by law);</li>
            <br />
            <li>attempt to access any part or function of the Website without authorization, or connect to the Website or Services or any Company servers or any other systems or networks of any the Services provided through the services by hacking, password mining or any other unlawful or prohibited means;</li>
            <br />
            <li>probe, scan or test the vulnerabilities of the Website or Services or any network connected to the properties, or violate any security or authentication measures on the Website or Services or any network connected thereto;</li>
            <br />
            <li>reverse look-up, track or seek to track any information of any other Users or visitors of the Website or Services;</li>
            <br />
            <li>take any actions that imposes an unreasonable or disproportionately large load on the infrastructure of systems or networks of the Website or Services, or the infrastructure of any systems or networks connected to the Website or Services;</li>
            <br />
            <li>use any devices, software or routine programs to interfere with the normal operation of any transactions of the Website or Services, or any other person’s use of the Website or Services; or</li>
            <br />
            <li>forge headers, impersonate, or otherwise manipulate identification, to disguise your identity or the origin of any messages or transmissions you send to Seadex or the Website.</li>
          </ol>
          <br />
          By accessing the Services, you agree that we have the right to investigate any violation of these Terms, unilaterally determine whether you have violated these Terms, and take actions under relevant regulations without your consent or prior notice.
        </>}
        />
        <TermAndPolicyCard title={'4. Termination'} description={<>
          Seadex may terminate, suspend, or modify your access to Website and/or the Services, or any portion thereof, immediately and at any point, at its sole discretion. Seadex will not be liable to you or to any third party for any termination, suspension, or modification of your access to the Services. Upon termination of your access to the Services, these Terms shall terminate, except for those clauses that expressly or are intended to survive termination or expiry.</>}
        />
        <TermAndPolicyCard title={'5. Disclaimers'} description={<>
          OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY REPRESENTATION OR WARRANTY, WHETHER EXPRESS, IMPLIED OR STATUTORY. YOU HEREBY ACKNOWLEDGE AND AGREE THAT YOU HAVE NOT RELIED UPON ANY OTHER STATEMENT OR AGREEMENT, WHETHER WRITTEN OR ORAL, WITH RESPECT TO YOUR USE AND ACCESS OF THE SERVICES.
          <br />
          <br />
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND/OR NON-INFRINGEMENT. SEADEX DOES NOT MAKE ANY REPRESENTATIONS OR WARRANTIES THAT ACCESS TO THE WEBSITE, ANY PART OF THE SERVICES, INCLUDING MOBILE SERVICES, OR ANY OF THE MATERIALS CONTAINED THEREIN, WILL BE CONTINUOUS, UNINTERRUPTED, TIMELY, OR ERROR-FREE AND WILL NOT BE LIABLE FOR ANY LOSSES RELATING THERETO. SEADEX DOES NOT REPRESENT OR WARRANT THAT THE WEBSITE, THE SERVICES OR ANY MATERIALS OF SEADEX ARE ACCURATE, COMPLETE, RELIABLE, CURRENT, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          <br />
          <br />
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NONE OF SEADEX OR ITS AFFILIATES AND THEIR RESPECTIVE SHAREHOLDERS, MEMBERS, DIRECTORS, OFFICERS, EMPLOYEES, ATTORNEYS, AGENTS, REPRESENTATIVES, SUPPLIERS OR CONTRACTORS WILL BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, INTANGIBLE OR CONSEQUENTIAL LOSSES OR DAMAGES ARISING OUT OF OR RELATING TO:
          <br />
          <ol type="a">
            <li>ANY PERFORMANCE OR NON-PERFORMANCE OF THE SERVICES, OR ANY OTHER PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF SEADEX OR ITS AFFILIATES;</li>
            <br />
            <li>ANY AUTHORIZED OR UNAUTHORIZED USE OF THE WEBSITE OR SERVICES, OR IN CONNECTION WITH THIS AGREEMENT;</li>
            <br />
            <li>ANY INACCURACY, DEFECT OR OMISSION OF ANY DATA OR INFORMATION ON THE WEBSITE;</li>
            <br />
            <li>ANY ERROR, DELAY OR INTERRUPTION IN THE TRANSMISSION OF SUCH DATA;</li>
            <br />
            <li>ANY DAMAGES INCURRED BY ANY ACTIONS, OMISSIONS OR VIOLATIONS OF THESE TERMS BY ANY THIRD PARTIES; OR</li>
            <br />
            <li>ANY DAMAGE CAUSED BY ILLEGAL ACTIONS OF OTHER THIRD PARTIES OR ACTIONS WITHOUT AUTHORIZED BY SEADEX.</li>
          </ol>
          <br />
          EVEN IF SEADEX KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES AND NOTWITHSTANDING THE FAILURE OF ANY AGREED OR OTHER REMEDY OF ITS ESSENTIAL PURPOSE, EXCEPT TO THE EXTENT OF A FINAL JUDICIAL DETERMINATION THAT SUCH DAMAGES WERE A RESULT OF OUR GROSS NEGLIGENCE, ACTUAL FRAUD, WILLFUL MISCONDUCT OR INTENTIONAL VIOLATION OF LAW OR EXCEPT IN JURISDICTIONS THAT DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES. THIS PROVISION WILL SURVIVE THE TERMINATION OF THESE TERMS.
          <br />
          <br />
          WE MAKE NO WARRANTY AS TO THE MERIT, LEGALITY OR JURIDICAL NATURE OF ANY TOKEN SOLD ON OUR PLATFORM (INCLUDING WHETHER OR NOT IT IS CONSIDERED A SECURITY OR FINANCIAL INSTRUMENT UNDER ANY APPLICABLE SECURITIES LAWS).
        </>}
        />
        <TermAndPolicyCard title={'6. Intellectual Property'} description={<>
          All present and future copyright, title, interests in and to the Services, registered and unregistered trademarks, design rights, unregistered designs, database rights and all other present and future intellectual property rights and rights in the nature of intellectual property rights that exist in or in relation to the use and access of the Website and the Services are owned by or otherwise licensed to Seadex. Subject to your compliance with these Terms, we grant you a non-exclusive, non-sub license, and any limited license to merely use or access the Website and the Services in the permitted hereunder.
          <br />
          <br />
          Except as expressly stated in these Terms, nothing in these Terms should be construed as conferring any right in or license to our or any other third party’s intellectual rights.
          <br />
          <br />
          If and to the extent that any such intellectual property rights are vested in you by operation of law or otherwise, you agree to do any and all such acts and execute any and all such documents as we may reasonably request in order to assign such intellectual property rights back to us.
          <br />
          <br />
          You agree and acknowledge that all content on the Website must not be copied or reproduced, modified, redistributed, used, created for derivative works, or otherwise dealt with for any other reason without being granted a written consent from us.
          <br />
          <br />
          Third parties participating on the Website may permit us to utilise trademarks, copyrighted material, and other intellectual property associated with their businesses. We will not warrant or represent that the content of the Website does not infringe the rights of any third party.
        </>}
        />
        <TermAndPolicyCard title={'7. Independent Parties'} description={<>
          Seadex is an independent contractor but not an agent of you in the performance of these Terms. These Terms shall not be interpreted as facts or evidence of an association, joint venture, partnership or franchise between the parties.
        </>}
        />
        <TermAndPolicyCard title={'8. Indemnification'} description={<>
          You agree to indemnify and hold harmless Seadex and its affiliates and their respective shareholders, members, directors, officers, employees, attorneys, agents, representatives, suppliers or contractors from and against any potential or actual claims, actions, proceedings, investigations, demands, suits, costs, expenses and damages (including attorneys’ fees, fines or penalties imposed by any regulatory authority) arising out of or related to:
          <br />
          <ol type="a">
            <li>your use of, or conduct in connection with, the Website or Services;</li>
            <br />
            <li>your breach or our enforcement of these Terms; or</li>
            <br />
            <li>your violation of any applicable law, regulation, or rights of any third party during your use of the Website or Services.</li>
          </ol>
          <br />
          If you are obligated to indemnify Seadex and its affiliates and their respective shareholders, members, directors, officers, employees, attorneys, agents, representatives, suppliers or contractors pursuant to these Terms, Seadex will have the right, in its sole discretion, to control any action or proceeding and to determine whether Seadex wishes to settle, and if so, on what terms.
          <br />
          <br />
          Your obligations under this indemnification provision will continue even after these Terms have expired or been terminated.
        </>}
        />
        <TermAndPolicyCard title={'9. Confidentiality'} description={<>
          You acknowledge that the Services contain Seadex’s and its affiliates’ trade secrets and confidential information. You agree to hold and maintain the Services in confidence, and not to furnish any other person any confidential information of the Services or the Website. You agree to use a reasonable degree of care to protect the confidentiality of the Services. You will not remove or alter any of Seadex’s or its affiliates’ proprietary notices. Your obligations under this provision will continue even after these Terms have expired or been terminated.
        </>}
        />
        <TermAndPolicyCard title={'10. Anti-Money Laundering'} description={<>
          Seadex expressly prohibits and rejects the use of the Website or the Services for any form of illicit activity, including money laundering, terrorist financing or trade sanctions violations. By using the Website or the Services, you represent that you are not involved in any such activity.
        </>}
        />
        <TermAndPolicyCard title={'11. Force Majeure'} description={<>
          Seadex shall have no liability to you if it is prevented from or delayed in performing its obligations or from carrying on its Services and business, by acts, events, omissions or accidents beyond its reasonable control, including, without limitation, strikes, failure of a utility service or telecommunications network, act of God, war, riot, civil commotion, malicious damage, compliance with any law or governmental order, rule, regulation, or direction.
        </>}
        />
        <TermAndPolicyCard title={'12. Jurisdiction and Governing Law'} description={<>
          The parties shall attempt in good faith to mutually resolve any and all disputes, whether of law or fact, and of any nature whatsoever arising from or with respect to these Terms. These Terms and any dispute or claim arising out of or in connection with the Services or the Website shall be governed by, and construed in accordance with, the laws of the Singapore
          <br />
          <br />
          [C3]
          <br />
          Any Dispute arising out of or related to these Terms is personal to you and us and will be resolved solely through individual arbitration and will not be brought as a class arbitration, class action or any other type of representative proceeding. There will be no class arbitration or arbitration in which an individual attempts to resolve a dispute as a representative of another individual or group of individuals. Further, a dispute cannot be brought as a class or other type of representative action, whether within or outside of arbitration, or on behalf of any other individual or group of individuals.
        </>}
        />
        <TermAndPolicyCard title={'13. Severability'} description={<>
          If any provision of these Terms is determined by any court or other competent authority to be unlawful or unenforceable, the other provisions of these Terms will continue in effect.
          <br />
          <br />
          If any unlawful or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect (unless that would contradict the clear intention of the clause, in which case the entirety of the relevant provision will be deemed to be deleted).
        </>}
        />
        <TermAndPolicyCard title={'14. Notices'} description={<>
          All notices, requests, demands, and determinations for us under these Terms (other than routine operational communications) shall be sent to info@seascape.network.
        </>}
        />
        <TermAndPolicyCard title={'15. Assignment'} description={<>
          You may not assign or transfer any right to use the Services or any of your rights or obligations under these Terms without prior written consent from Seadex, including any right or obligation related to the enforcement of laws or the change of control. Seadex may assign or transfer any or all of its rights or obligations under these Terms, in whole or in part, without notice or obtaining your consent or approval.
        </>}
        />
        <TermAndPolicyCard title={'16. Third Party Rights'} description={<>
          No third party shall have any rights to enforce any terms contained herein.
        </>}
        />
        <TermAndPolicyCard title={'17. Third Party Website Disclaimer'} description={<>
          Any links to third party websites from our Services does not imply endorsement by us of any product, service, information or disclaimer presented therein, nor do we guarantee the accuracy of the information contained on them. If you suffer loss from using such third party product and service, we will not be liable for such loss. In addition, since we have no control over the terms of use or privacy policies of third-party websites, you should carefully read and understand those policies.
        </>}
        />
        <TitleWrapper>
          <AutoColumn gap="lg">
            <Text fontWeight={500} fontSize={20}>
              {'BY MAKING USE OF OUR SERVICES, YOU ACKNOWLEDGE AND AGREE THAT: (A) YOU ARE AWARE OF THE RISKS ASSOCIATED WITH TRANSACTIONS OF ENCRYPTED OR DIGITAL TOKENS OR CRYPTOCURRENCIES WITH A CERTAIN VALUE THAT ARE BASED ON BLOCKCHAIN AND CRYPTOGRAPHY TECHNOLOGIES AND ARE ISSUED AND MANAGED IN A DECENTRALIZED FORM (“DIGITIAL CURRENCIES”); (B) YOU SHALL ASSUME ALL RISKS RELATED TO THE USE OF THE SERVICES AND TRANSACTIONS OF DIGITAL CURRENCIES; AND (C) SEADEX SHALL NOT BE LIABLE FOR ANY SUCH RISKS OR ADVERSE OUTCOMES. AS WITH ANY ASSET, THE VALUES OF DIGITAL CURRENCIES ARE VOLATILE AND MAY FLUCTUATE SIGNIFICANTLY AND THERE IS A SUBSTANTIAL RISK OF ECONOMIC LOSS WHEN PURCHASING, HOLDING OR INVESTING IN DIGITAL CURRENCIES.'}
            </Text>
          </AutoColumn>
        </TitleWrapper>
      </ContentWrapper>
    </>
  );
}