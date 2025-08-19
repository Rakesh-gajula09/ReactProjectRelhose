import React from 'react';

const styles = {
  header: {
    textAlign: 'center',
    padding: '2rem 1rem',
    backgroundColor: '#f9f9f9',
  },
  h1: {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0',
  },
  tagline: {
    fontSize: '1.5rem',
    marginTop: '0.5rem',
    color: '#555',
  },
  section: {
    padding: '2rem 1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  sectionColumn: {
    maxWidth: '800px',
    width: '100%',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '1rem',
  },
  sectionText: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#333',
  },
  midSection: {
    padding: '2rem 1rem',
    backgroundColor: '#f0f4f8',
  },
  midSectionText: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
  },
  bulletSection: {
    padding: '2rem 1rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  bulletList: {
    paddingLeft: '1.5rem',
    lineHeight: '1.8',
  },
};

const About = () => {
  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.h1}>Welcome to MyAPP</h1>
        <p style={styles.tagline}>
          "Where Your Content Creativity is Shared, Streamlined, and Monetized"
        </p>
      </header>

      <section style={styles.section}>
        <div style={styles.sectionColumn}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.sectionText}>
            Elevate the creators of today by transforming ideas into impactful streams and creative uploads.
            This platform is a vibrant hub for sharing and celebrating creativity where every voice finds its audience at global scale with multilingual support.
            Here, you can share your unique perspective, stream your content, and connect with the world through your content.
            It's not just a stage for creators but also a collective voice of the world, fostering inspiration and innovation in every corner.
            <br /><br />
            We’re a community-driven platform where creators and audiences connect through short, engaging videos. 
            Our goal is to make creativity accessible, foster meaningful interactions, and keep users safe.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={{ ...styles.sectionColumn, marginLeft: '1.5rem' }}>
          <h2 style={styles.sectionTitle}>Our Vision</h2>
          <p style={styles.sectionText}>
            The platform promotes your streams to world corners without language barriers.
            It aims to be a global platform where every creator, regardless of their background, can share their content and connect with audiences worldwide.
            This is more than just a video platform; it is a digital ecosystem.
            It envisions a future where creators can thrive through their art, audiences can engage deeply with meaningful content, and communities grow stronger through shared experiences.
          </p>
        </div>
      </section>

      <section style={styles.midSection}>
        <h2 style={styles.sectionTitle}>What We Believe In</h2>
        <p style={styles.midSectionText}>
          At our video sharing and streaming platform, we believe that creativity and inspiration are limitless.
          We are dedicated to creating a space where individuals from all walks of life can share their stories and showcase their perspectives, bringing inspiration and fresh ideas to a global audience.
          Each video has the power to connect people, spark conversations, and foster a sense of community.
          Our platform promotes genuine, creative expression and aims to empower users while maintaining high ethical standards.
          We are committed to preventing the spread of misinformation, discouraging harmful or anti-social behavior, and ensuring that our platform remains a positive and constructive environment for all users.
        </p>
      </section>

      <section style={styles.bulletSection}>
        <h2 style={styles.sectionTitle}>What We Offer</h2>
        <ul style={styles.bulletList}>
          <li><strong>Create & Share:</strong> Upload videos (up to [X] minutes) and stream them to a global audience.</li>
          <li><strong>Collaborate:</strong> Join members-only chats to brainstorm ideas and connect with others.</li>
          <li><strong>Grow Your Audience:</strong> Use our dashboard to track watch time, likes, saves, and audience trends (age, region, etc.).</li>
          <li><strong>Protect Your Work:</strong> Automatically add your name/logo as a watermark to your videos.</li>
        </ul>
      </section>

      <section style={styles.bulletSection}>
        <h2 style={styles.sectionTitle}>Our Rules for a Safe Community</h2>
        <ul style={styles.bulletList}>
          <li><strong>Keep It Respectful:</strong> No hate speech, bullying, or explicit content.</li>
          <li><strong>Fair Use:</strong> Short clips (under <strong>9 seconds</strong>) are allowed for commentary, education, or parody—just credit the original creator!</li>
          <li><strong>No Under-15s:</strong> Users must be <strong>15+</strong> to join.</li>
        </ul>
      </section>

      <section style={styles.bulletSection}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <ul style={styles.bulletList}>
          <li><strong>Privacy First:</strong> Your data is secure and used only to improve your experience.</li>
          <li><strong>Creativity Unleashed:</strong> Share and Stream, collaborate, and grow—all in one place.</li>
          <li><strong>Always Improving:</strong> We’re adding cool features like multilingual dubbing, subscriptions, and smarter recommendations soon!</li>
        </ul>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem', fontWeight: '500' }}>
          <strong>Join us</strong> and let’s build a community where creativity thrives!
        </p>
      </section>
    </div>
  );
};

export default About;
