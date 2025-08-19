import React from 'react';

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
  },
  heading1: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  heading2: {
    fontSize: '1.5rem',
    marginTop: '2rem',
    marginBottom: '1rem',
  },
  heading3: {
    fontSize: '1.25rem',
    marginTop: '1.5rem',
    marginBottom: '0.75rem',
  },
  paragraph: {
    marginBottom: '1rem',
  },
  list: {
    marginBottom: '1rem',
    paddingLeft: '1.5rem',
  },
};

const TermsAndConditions = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>Welcome to Terms and Conditions of MyAPP</h1>

      <div>
        <h2 style={styles.heading2}>Thank you for using the MyAPP service</h2>
        <p style={styles.paragraph}>
          The MyAPP.com, MyAPP Android and iOS App is operated by MyAPP Inc. MyAPP accepts both user-generated and
          AI-generated video content without watermark that provides video exchange and hosting services. MyAPP offers
          access to user-generated videos and AI-generated content. The service enables users to discover, watch, and
          share videos and other content, offering a platform for connection, inspiration, and information sharing
          worldwide. It also serves as a distribution hub for original content creators and advertisers of all sizes.
          Let us see the Terms and Conditions outline the rules and guidelines for using our services.
        </p>

        <h2 style={styles.heading2}>1. Acceptance of Terms and Conditions</h2>
        <ul style={styles.list}>
          <li>
            By accessing and using the MyAPP Service, you agree to comply with all terms, conditions, and notices
            outlined here the "Terms of Use".
          </li>
          <li>MyAPP reserves the right to revise or update the Terms of Use at its sole discretion.</li>
          <li>
            Continued use of the MyAPP Service after any changes to the Terms of Use indicates acceptance of those
            changes.
          </li>
          <li>It is your responsibility to periodically review these Terms for updates.</li>
        </ul>

        <h2 style={styles.heading2}>2. Guidelines for Comments and Live Chat Usage</h2>
        <p style={styles.paragraph}>
          MyAPP may provide features such as live chats and comment sections to facilitate discussions between users and
          creators about Content or services. By participating, you should agree to the following rules:
        </p>

        <h3 style={styles.heading3}>Prohibited Activities:</h3>
        <ul style={styles.list}>
          <li><strong>Defamatory or Libelous Content:</strong> Harmful, defamatory, or privacy-invading posts.</li>
          <li><strong>Indecent or Obscene Content:</strong> No indecent, obscene, or pornographic material.</li>
          <li><strong>Copyright Infringement:</strong> Do not share copyrighted or confidential material unlawfully.</li>
          <li><strong>Trademark Misuse:</strong> Do not misuse others' trademarks or service marks.</li>
          <li><strong>Harassment or Hate Speech:</strong> No abusive, harassing, or hate-filled content.</li>
          <li><strong>Illegal Activities:</strong> No use of forums for illegal purposes.</li>
          <li><strong>Spam and Advertisements:</strong> No unsolicited promotions or unrelated ads.</li>
        </ul>

        <h3 style={styles.heading3}>User Responsibility:</h3>
        <ul style={styles.list}>
          <li><strong>Respectful Use:</strong> Avoid disrupting other users or the forum.</li>
          <li><strong>Data Collection:</strong> No harvesting of user data or spam.</li>
          <li><strong>Child Protection:</strong> Do not collect personal information from children.</li>
        </ul>

        <h2 style={styles.heading2}>3. Content Moderation</h2>
        <ul style={styles.list}>
          <li>MyAPP may monitor and moderate user content at its discretion.</li>
          <li>Content deemed harmful, offensive, or against these terms may be removed.</li>
          <li>MyAPP is not responsible for delays or errors in content moderation.</li>
        </ul>

        <h2 style={styles.heading2}>4. Additional Rules and Policies</h2>
        <ul style={styles.list}>
          <li><strong>Content Ownership:</strong> Users retain ownership but grant MyAPP a license to host content.</li>
          <li><strong>Service Usage:</strong> Hacking or disrupting MyAPP systems is prohibited.</li>
          <li><strong>Third-Party Links:</strong> MyAPP is not responsible for third-party content or policies.</li>
          <li><strong>Age Restrictions:</strong> Users must be 13+, and some features require users to be 16+.</li>
          <li><strong>Account Security:</strong> Users are responsible for securing their account credentials.</li>
          <li><strong>Governing Law:</strong> These terms are governed by the laws of the jurisdiction of MyAPP.</li>
        </ul>

        <h2 style={styles.heading2}>5. Reporting Violations</h2>
        <p style={styles.paragraph}>
          Report any violations through our reporting system or contact support.
        </p>

        <h2 style={styles.heading2}>6. Updates to Terms and Conditions</h2>
        <p style={styles.paragraph}>
          MyAPP may update these terms periodically. Significant changes will be communicated via platform notification
          or email. The "Effective Date" indicates the latest revision. As MyAPP evolves, features and content may be
          added, changed, or removed to enhance service quality and comply with legal or safety standards.
        </p>

        {/* Ad Terms Section */}
        <div id="adterms" style={{ marginTop: '4rem' }}>
          <h1 style={styles.heading1}>MyAPP Ad Terms</h1>
          <p style={styles.paragraph}>
            The <strong>MyAPP.com</strong> ("MyAPP Ads") is operated by <strong>MyAPP Inc.</strong>. MyAPPAds allows
            user-generated content from businesses, advertisers, and publishers through digital videos or banners. It
            offers an optimal ad experience and growth analytics. Only trusted and verified digital advertisers and
            agencies are allowed.
          </p>

          <h2 style={styles.heading2}>1. Acceptance of Terms and Conditions</h2>
          <ul style={styles.list}>
            <li>
              By using the MyAPP Ad services, you agree to the Ad-specific terms ("Ad Terms of Use") outlined here.
            </li>
            <li>MyAPP may revise these Ad Terms at any time.</li>
            <li>
              Continued use after changes implies acceptance of the updated Ad Terms.
            </li>
            <li>
              It is your responsibility to regularly check these Ad Terms for any modifications.
            </li>
          </ul>

          <h2 style={styles.heading2}>2. Continued Acceptance</h2>
          <ul style={styles.list}>
            <li>
              All advertisers using MyAPP’s Ad services must adhere to content guidelines, privacy standards, and
              targeting policies.
            </li>
            <li>Repeated violations may result in ad account suspension for 6 months or demonetize for 6 months.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
