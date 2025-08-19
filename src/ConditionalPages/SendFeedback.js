import React, { useState } from 'react';

const SendFeedback = () => {
  const [feedback, setFeedback] = useState('');
  const [screenshot, setScreenshot] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData to send feedback and screenshot
    const formData = new FormData();
    formData.append('feedback', feedback);
    if (screenshot) {
      formData.append('screenshot', screenshot);
    }

    // TODO: Replace with actual API endpoint
    fetch('/api/send-feedback/', {
      method: 'POST',
      body: formData,
      // headers: { 'X-CSRFToken': 'your_csrf_token_if_needed' }
    })
      .then((response) => {
        if (response.ok) {
          alert('Feedback submitted successfully!');
          setFeedback('');
          setScreenshot(null);
        } else {
          alert('Something went wrong. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
        alert('Network error. Please try again later.');
      });
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '16px',
    resize: 'none',
    outline: 'none',
  };

  const labelStyle = {
    marginBottom: '8px',
    display: 'block',
    color: '#333',
    fontWeight: '500',
  };

  const buttonStyle = {
    backgroundColor: '#404040',
    color: '#100a0a',
    padding: '10px 20px',
    border: '2px solid #0a0a08',
    borderRadius: '9999px',
    cursor: 'pointer',
    transition: '0.3s',
  };

  const linkStyle = {
    color: '#977f34',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <textarea
          name="feedback"
          rows="4"
          placeholder="Enter your feedback here"
          style={inputStyle}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        <div>
          <label htmlFor="screenshot" style={labelStyle}>
            Attach Screenshot (optional):
          </label>
          <input
            type="file"
            name="screenshot"
            id="screenshot"
            style={{ ...inputStyle, padding: '8px' }}
            onChange={(e) => setScreenshot(e.target.files[0])}
          />
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button type="submit" style={buttonStyle}>
            Send Feedback
          </button>
        </div>
      </form>

      <div style={{ marginTop: '24px', textAlign: 'center', color: '#666' }}>
        <p>
          Prefer to send an email?{' '}
          <a href="mailto:rakesh.gajula711@gmail.com" style={linkStyle}>
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
};

export default SendFeedback;
