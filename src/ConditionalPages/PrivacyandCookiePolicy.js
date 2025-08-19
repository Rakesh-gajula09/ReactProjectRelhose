import React from 'react';

const PrivacyandCookiePolicy = () => {
  const containerStyle = {
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  };

  const headingStyle = {
    color: '#333',
    marginBottom: '10px',
  };

  const listStyle = {
    marginBottom: '20px',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> [Insert Date]</p>

      <h2 style={headingStyle}>Overview</h2>
      <p>This Privacy Policy applies to all services offered through our mobile applications, platforms, and websites (collectively, the “Services”). It also covers any Personal Information obtained from website visitors and users in connection with the Services we provide directly to those users.</p>

      <h2 style={headingStyle}>Your Privacy Matters</h2>
      <p>We take your privacy seriously. Below are the key points of our Privacy Policy:</p>
      <ul style={listStyle}>
        <li><strong>Scope:</strong> This Privacy Policy applies to all Services provided, including mobile applications, platforms, and websites.</li>
        <li><strong>Encouragement to Review:</strong> We encourage you to review this Privacy Policy whenever you access our Services or interact with us to stay informed about our data privacy practices and the choices available to you.</li>
        <li><strong>Agreement to Policy:</strong> By using the Services, you agree to this Privacy Policy.</li>
        <li><strong>Updates to the Policy:</strong> We may update or revise this Privacy Policy from time to time, with or without prior notice. Changes will be indicated by updating the date at the top of the policy.</li>
        <li><strong>Substantial Changes:</strong> For significant changes, we may provide a more prominent notice on our platforms.</li>
        <li><strong>Contact for Concerns:</strong> If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us.</li>
      </ul>

      <h2 style={headingStyle}>Introduction</h2>
      <p>Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and the measures we take to protect your data. By using our Services, you agree to the collection and use of information as described in this Privacy Policy.</p>

      <h2 style={headingStyle}>1. Information We Collect</h2>
      <p>To provide and improve our Services, we collect the following types of information:</p>
      <ul style={listStyle}>
        <li><strong>Email and Phone Number:</strong> For account creation, communication, and verification purposes.</li>
        <li><strong>Verification ID:</strong> To authenticate users and ensure compliance with our policies.</li>
        <li><strong>User Uploads:</strong> Includes videos, clips, posts, and livestreams that you share on our platform.</li>
        <li><strong>Engagement Data:</strong> Information about the content you like, rate, share, or view most frequently.</li>
        <li><strong>Location Data:</strong> To provide location-based services and improve user experience in specific regions.</li>
        <li><strong>Content Preferences:</strong> Insights into your most viewed and shared content to enhance personalization.</li>
      </ul>

      <h2 style={headingStyle}>2. How We Use Your Information</h2>
      <p>We use the information collected for the following purposes:</p>
      <ul style={listStyle}>
        <li>To provide, maintain, and improve our Services.</li>
        <li>To personalize your experience based on your preferences and activity.</li>
        <li>To ensure the safety and security of our platform and users.</li>
        <li>To comply with legal obligations and respond to lawful requests from authorities.</li>
        <li>To monitor and prevent the sharing of inappropriate or explicit content.</li>
        <li>We don’t access your cross-site content, and we don’t bother about what you do on other sites.</li>
      </ul>

      <h2 style={headingStyle}>3. Content Moderation and Policy Enforcement</h2>
      <ul style={listStyle}>
        <li>Channels or accounts sharing explicit or prohibited content will be removed from our platform.</li>
        <li>We reserve the right to take action against users posting content that violates our guidelines or local laws.</li>
      </ul>

      <h2 style={headingStyle}>4. Disclosure of Information</h2>
      <p>Your information is handled with the utmost care. However, we may disclose information in the following circumstances:</p>
      <ul style={listStyle}>
        <li><strong>Compliance with Laws:</strong> If required by law or government authorities, especially for law enforcement requests related to criminal investigations.</li>
        <li><strong>Safety and Security:</strong> To protect our platform, users, and community from harm or unlawful activities.</li>
      </ul>

      <h2 style={headingStyle}>5. Your Rights and Choices</h2>
      <p>You have the following rights regarding your personal information:</p>
      <ul style={listStyle}>
        <li>The right to access, update, or delete your information by contacting us directly.</li>
        <li>The right to control the data you share on our platform.</li>
        <li>The right to opt out of personalized services based on your engagement or location.</li>
      </ul>

      <h2 style={headingStyle}>6. Updates to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. Any changes will be noted by updating the effective date at the top of the policy. For significant changes, we will provide prominent notice on our platform.</p>

      <h2 style={headingStyle}>7. Contact Us</h2>
      <p>If you have any questions, concerns, or requests related to this Privacy Policy, please contact us at <a href="mailto:support@example.com" style={linkStyle}>support@example.com</a>.</p>
    </div>
  );
};

export default PrivacyandCookiePolicy;
