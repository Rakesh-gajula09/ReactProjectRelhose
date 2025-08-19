import React from "react";

const CookiePolicy = () => {
  const sectionStyle = {
    padding: "1rem 1.5rem",
    lineHeight: "1.6",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    maxWidth: "900px",
    margin: "auto",
  };

  const headingStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "1.5rem",
    color: "#2c3e50",
  };

  const listStyle = {
    marginLeft: "1rem",
    paddingLeft: "1rem",
  };

  return (
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Cookie Policy</h2>
      <p>
        This Cookie Policy explains how our platform uses cookies and similar
        technologies to collect and manage your data when you visit our website.
      </p>

      <h3 style={headingStyle}>What Are Cookies?</h3>
      <p>
        Cookies are small files stored on your device to help us remember your
        preferences, improve your experience, and understand how you interact with
        our platform.
      </p>

      <h3 style={headingStyle}>Types of Cookies We Use</h3>
      <ul style={listStyle}>
        <li><strong>Essential Cookies:</strong> Help with basic features like login and video playback.</li>
        <li><strong>Analytics Cookies:</strong> Track watch hours, likes, saves, etc.</li>
        <li><strong>Functionality Cookies:</strong> Save your video quality, language, and preferences.</li>
        <li><strong>Advertising Cookies (future):</strong> Will deliver personalized ads.</li>
        <li><strong>Third-Party Cookies:</strong> Used by tools like YouTube embeds and analytics services.</li>
      </ul>

      <h3 style={headingStyle}>Purpose of Cookies</h3>
      <p>
        Cookies help us improve our platform, personalize your video recommendations,
        and offer better analytics. They support future features like regional and
        age-based insights, multilingual dubbing, and smart suggestions.
      </p>

      <h3 style={headingStyle}>Managing Cookies</h3>
      <p>
        You can control or delete cookies through your browser settings. Please note
        that disabling cookies may limit some features of our platform.
      </p>

      <h3 style={headingStyle}>Policy Updates</h3>
      <p>
        We may revise this Cookie Policy from time to time. Changes will be
        communicated via email or notification on the platform.
      </p>

      <h3 style={headingStyle}>Applicable Laws</h3>
      <ul style={listStyle}>
        <li><strong>India:</strong> Information Technology Act, 2000 and SPDI Rules.</li>
        <li><strong>Global:</strong> EU ePrivacy Directive and GDPR (consent-based usage).</li>
      </ul>

      <p><strong>Note:</strong> This platform is intended for users aged 15 and above only.</p>
    </div>
  );
};

export default CookiePolicy;
