function TermsOfUse({ hostname }: { hostname: string }) {
    return (
      <div>
        <p>Welcome to {hostname}, a product of Trabot solutions (Pvt. Ltd).</p>
        <br />
        <p>
          By accessing and using our website, you agree to comply with the
          following terms and conditions:
        </p>
        <ol>
          <li>
            Purpose:
            <ul>
              <li>
                {hostname} is dedicated to providing educational resources
                (example quizzes and notes), to facilitate learning for our users.
              </li>
            </ul>
          </li>
          <li>
            User Obligations:
            <ul>
              <li>
                Users are responsible for ensuring the accuracy of the information
                they provide and for maintaining the security of their account
                credentials.
              </li>
              <li>
                Users must not engage in any activity that disrupts the
                functioning of the website or compromises its security.
              </li>
            </ul>
          </li>
          <li>
            Prohibited Activities:
            <ul>
              <li>
                Users must not attempt to access restricted areas of the website
                or circumvent any security measures.
              </li>
              <li>
                Users must not engage in any form of abusive, harassing, or
                unlawful behaviour on the website.
              </li>
            </ul>
          </li>
          <li>
            Intellectual Property Rights:
            <ul>
              <li>
                All content provided on {hostname}, including quizzes, notes, and
                other educational materials, is the intellectual property of
                Trabot Solutions (Pvt. Ltd) , and is protected by copyright laws.
              </li>
              <li>
                Users may not reproduce, distribute, or modify any content from
                the website without prior written consent.
              </li>
            </ul>
          </li>
          <li>
            Disclaimers:
            <ul>
              <li>
                Trabot Solutions (Pvt. Ltd) strives to provide accurate and
                up-to-date educational content, but we make no guarantees
                regarding the accuracy or completeness of the information
                provided.
              </li>
              <li>
                Trabot Solutions (Pvt. Ltd) is not liable for any loss or damage
                incurred as a result of reliance on the information presented on
                the website.
              </li>
            </ul>
          </li>
          <li>
            Limitations of Liability:
            <ul>
              <li>
                In no event shall Trabot solutions be liable for any direct,
                indirect, incidental, special, or consequential damages arising
                out of or in any way connected with the use of our website.
              </li>
            </ul>
          </li>
          <li>
            Governing Law:
            <ul>
              <li>
                These terms of use shall be governed by and construed in
                accordance with the laws of India , and any disputes relating to
                these terms shall be subject to the exclusive jurisdiction of the
                courts of Uttarakhand, India.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    );
  }
  
  export default TermsOfUse;
  