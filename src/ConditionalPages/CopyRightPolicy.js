import React, { useState } from 'react';

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  subHeading: {
    fontSize: '1.5rem',
    marginTop: '2rem',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  backdrop: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 10,
  },
  modal: {
    position: 'fixed',
    top: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#fff',
    padding: '2rem',
    zIndex: 11,
    width: '90%',
    maxWidth: '600px',
    borderRadius: '8px',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.3rem',
    marginBottom: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textArea: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  formActions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
  },
};

const CopyRightPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Copyright Policy</h1>
      <p>Effective Date: [Insert Date]</p>

      <h2 style={styles.subHeading}>1. Overview</h2>
      <p>
        [This website] is committed to respecting intellectual property rights and complies with applicable copyright laws, including:
      </p>
      <ul>
        <li>
          <strong>The Copyright Act, 1957 (India):</strong>
          <ul>
            <li>This act establishes a comprehensive legal framework to protect the intellectual property of creators in India.</li>
            <li>It grants exclusive rights to authors over their works, covering literary, artistic, musical, and cinematographic creations.</li>
            <li>The law ensures creators can control reproduction, distribution, and adaptation of their works.</li>
            <li>It also includes strict penalties for infringement to protect original content and foster innovation.</li>
          </ul>
        </li>
        <li>
          <strong>The Digital Millennium Copyright Act (DMCA) (US):</strong>
          <ul>
            <li>The DMCA addresses copyright issues in the digital era, providing tools to combat online infringement.</li>
            <li>It includes a takedown mechanism for rights holders to remove infringing content from websites and platforms.</li>
            <li>The act also limits liability for service providers acting in good faith to address copyright violations.</li>
            <li>For an Indian-origin website, compliance with DMCA supports international operations and aligns with global copyright standards.</li>
          </ul>
        </li>
      </ul>

      <p>Users are responsible for ensuring that any content they upload or share does not infringe the intellectual property rights of others.</p>

      <h2 style={styles.subHeading}>2. Permissible Uses of Content</h2>
      <p>
        In line with fair use principles and our policy, the following uses of content are permitted:
        <br /> - Using short clips (up to 15 seconds) for:
        <br /> 1. <strong>Educational purposes</strong>
        <br /> 2. <strong>Reviews and critiques</strong>
        <br /> 3. <strong>Corrections</strong>
        <br /> 4. <strong>Awareness</strong>
      </p>
      <p>
        For usage beyond 15 seconds or full videos, users must contact the content owner via their channel/profile.
      </p>

      <h2 style={styles.subHeading}>3. Takedown Requests</h2>
      <p>
        If you believe your copyrighted content has been used without authorization, you may file a takedown request:
        <br /> - Evidence of ownership (e.g., registration or original files)
        <br /> - Link to infringing content
        <br /> - Your contact details
      </p>
      <p>
        Submit your request via our{' '}
        <button style={styles.button} onClick={() => setShowForm(true)}>File a Copyright Complaint</button>
        . We will review your claim within <strong>7 business days</strong>.
      </p>

      <h2 style={styles.subHeading}>4. Repeat Infringers</h2>
      <p>Violators may face penalties like account suspension, permanent termination, or legal action.</p>

      <h2 style={styles.subHeading}>5. User Responsibilities</h2>
      <p>
        - Ensure ownership or permission for uploaded content.
        <br /> - No false copyright complaints.
      </p>

      <h2 style={styles.subHeading}>6. Contact Information</h2>
      <p>
        Email: [Insert Support Email] <br />
        Phone: [Insert Support Phone Number] <br />
        Or use the <a href="/contact-us">contact form</a>.
      </p>

      <h2 style={styles.subHeading}>7. Disclaimer</h2>
      <p>
        This platform removes infringing content upon valid notice, but is not liable for user submissions unless notified.
      </p>

      <h2 style={styles.subHeading}>1. Overview</h2>
      <p>
        Our platform Encourage to upload your Own Content and respect the copyrights of others.
        To protect your content and others’, only upload video content you’ve created or have permission to use.
        Avoid using copyrighted elements—like audio, visuals, or clips from others—unless you’ve secured the appropriate rights.
      </p>
      <ul>
        <li>
          <strong>Fair Use Cases</strong>
          <ul>
            <li>Criticism and Commentary</li>
            <li>News and Events Reporting</li>
            <li>Speech Reporting</li>
            <li>Education and Teaching</li>
            <li>Parody and Satire</li>
            <li>Research and Scholarship</li>
            <li>Transformative Use</li>
            <li>Quotation</li>
            <li>Review</li>
            <li>Non-profit Educational Use</li>
          </ul>
        </li>
        <p>Use Fair use by adding value, purpose, editing and Refactoring </p>
        
          <h4>🔸 Criticism and Commentary</h4>
          <p>Using parts of a work to express your opinion, analysis, or reactions — e.g., reviewing a movie or reacting to a video.</p>

          <h4>🔸 News and Events Reporting</h4>
          <p>Including clips or information from public, cultural events or current happenings as part of journalism or coverage.</p>

          <h4>Speech and Scam Reporting</h4>
          <p>Sharing or analyzing public speeches (by politicians, leaders, religious people etc.) in news or commentary formats.</p>

          <h4>🔸 Education and Teaching</h4>
          <p>Using short media clips in tutorials, lectures, or explainers for learning purposes.</p>

          <h4>🔸 Parody and Satire</h4>
          <p>Making humorous or critical remixes that transform the original work to comment on it or society.</p>

          <h4>🔸 Research and Scholarship</h4>
          <p>Quoting or referencing works for academic, scientific, technical or factual study purposes.</p>

          <h4>🔸 Transformative Use</h4>
          <p>Reusing content in a way that adds new meaning, message, or purpose — like turning a film clip into a meme or tutorial.</p>

          <h4>🔸 Quotation</h4>
          <p>Using brief excerpts from written, spoken, or recorded works to support your own point or idea.</p>

          <h4>🔸 Review</h4>
          <p>Evaluating and discussing books, products, music, or films — often with short clips or previews.</p>

          <h4>🔸 Non-profit Educational Use</h4>
          <p>Using content for teaching or awareness in non-commercial educational settings like schools or NGOs.</p>

          <h4>Fact and Reality showing</h4>
          <p>Using short clips to illustrate facts, statistics, or historical events in a documentary or educational context.</p>

          <h4> Meme usage</h4>
          <p>Creating memes that transform original content into humorous or critical commentary, often with added text or visuals.</p>

          <p>Use Fair use by adding value, purpose, editing and Refactoring </p>

        
        <li>
      
          <ul>
            <li>The DMCA addresses copyright issues in the digital era, providing tools to combat online infringement.</li>
            <li>if the content was not removed by creator within the 12 hours after recieving the mail, then we delete your content and keep your channel in halt</li>
            
          </ul>

        </li>
      </ul>

      {/* Modal Backdrop and Form */}
      {showForm && (
        <>
          <div style={styles.backdrop} onClick={() => setShowForm(false)}></div>
          <div style={styles.modal}>
            <h2>Copyright Complaint Form</h2>
            <p>If your content was used without permission, fill the form below:</p>
            <form>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Name:</label>
                <input type="text" name="name" placeholder="Full Name" required style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Email:</label>
                <input type="email" name="email" placeholder="Email" required style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Link to Infringing Content:</label>
                <input type="url" name="content_link" placeholder="URL" required style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Proof of Ownership:</label>
                <textarea name="ownership_proof" rows="4" required placeholder="Describe proof" style={styles.textArea}></textarea>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Additional Information:</label>
                <textarea name="additional_info" rows="4" placeholder="Optional details" style={styles.textArea}></textarea>
              </div>
              <div style={styles.formActions}>
                <button type="submit" style={styles.button}>Submit Complaint</button>
                <button type="button" onClick={() => setShowForm(false)} style={{ ...styles.button, backgroundColor: 'gray' }}>Cancel</button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default CopyRightPage;
