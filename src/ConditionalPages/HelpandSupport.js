import React, { useState } from 'react';

const faqStyle = {
  faqBox: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
  faqHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    alignItems: 'center',
  },
  faqAnswer: {
    marginTop: '10px',
  },
  list: {
    paddingLeft: '20px',
  },
};

const faqs = [
  {
    question: 'How to Register, Login, Logout from the MyApp?',
    answer: (
      <>
        <h3>The Process of Register, Login, Logout in MyApp is very Easy</h3>
        <p><strong>In Laptop or PC:</strong></p>
        <ul style={faqStyle.list}>
          <li><strong>Register:</strong> When you enter the website, you will see the <b>Register Button</b> on the right side of the Navbar. Click on it <b>↠</b> fill the form <b>↠</b> Submit.</li>
          <li><strong>Login:</strong> Same as Register, click Login <b>↠</b> fill form <b>↠</b> Submit.</li>
          <li><strong>Logout:</strong> Once logged in, click Logout from the Navbar to sign out.</li>
        </ul>
        <p><strong>In Mobile:</strong> {/* To update when mobile app is developed */}</p>
        <ul style={faqStyle.list}>
          <li><strong>Register:</strong> Same as PC flow.</li>
          <li><strong>Login:</strong> Same as PC flow.</li>
          <li><strong>Logout:</strong> Same as PC flow.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How to set up the Channel or Account in MyApp?',
    answer: (
      <>
        <p>Setup your channel to upload content and reach global audiences:</p>
        <ul style={faqStyle.list}>
          <li><strong>In Laptop or PC:</strong> After login, go to Dashboard <b>↠</b> Profile section <b>↠</b> Edit button <b>↠</b> Upload banner, profile image, set description, change name, ID, etc.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How My Channel will be Monetized?',
    answer: (
      <>
        <p>The longer the subscription, the better value you get:</p>
        <ul style={faqStyle.list}>
          <li><strong>3-month plan:</strong> Short-term access. Cancel anytime.</li>
          <li><strong>6-month plan:</strong> Better pricing, longer commitment.</li>
          <li><strong>1-year plan:</strong> Best value over long term.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'What is the Purpose of Dashboard and Analytics?',
    answer: (
      <>
        <p>Dashboard & Analytics help track channel performance and user interaction:</p>
        <ul style={faqStyle.list}>
          <li>Track subscribers, views, and revenue.</li>
          <li>Upload content, manage channel settings.</li>
          <li>Access analytics to grow strategically.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How to observe the channel Analytics?',
    answer: (
      <>
        <p>You can observe channel analytics under the "Analytics" section in your dashboard:</p>
        <ul style={faqStyle.list}>
          <li>See trends for views, watch time, and engagement.</li>
          <li>Identify your most popular videos.</li>
          <li>Monitor audience demographics and behavior.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How to delete and edit the comments ?',
    answer: (
      <>
        <p>Managing comments is easy through your dashboard:</p>
        <ul style={faqStyle.list}>
          <li>Go to the comments section in dashboard.</li>
          <li>Use options beside each comment to delete or edit it.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How to Report about content in MyApp?',
    answer: (
      <>
        <p>To report content:</p>
        <ul style={faqStyle.list}>
          <li>Click the "Report" button available on the video or content page.</li>
          <li>Select the reason and submit your report.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'About Ads?',
    answer: (
      <>
        <p>Ads may be shown on your videos based on channel monetization:</p>
        <ul style={faqStyle.list}>
          <li>Ad revenue is shared if your channel meets monetization criteria.</li>
          <li>You can control ad types in channel settings.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'What is the Glossary of MyApp?',
    answer: (
      <>
        <p>Glossary includes definitions of terms used in the platform like:</p>
        <ul style={faqStyle.list}>
          <li><strong>Channel:</strong> Your content hub.</li>
          <li><strong>Watch time:</strong> Total time spent by viewers.</li>
          <li><strong>Impressions:</strong> How many times your video thumbnail was shown.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'I Want to delete my channel or Account?',
    answer: (
      <>
        <p>You can request account deletion:</p>
        <ul style={faqStyle.list}>
          <li>Go to account settings.</li>
          <li>Click “Delete Account” or contact support.</li>
          <li>Note: This is irreversible and deletes all data.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How to earn money on or from MyApp?',
    answer: (
      <>
        <p>Monetization options:</p>
        <ul style={faqStyle.list}>
          <li>Ad revenue from videos.</li>
          <li>Premium subscriptions and tips.</li>
          <li>Sponsored content or merchandise links.</li>
        </ul>
      </>
    ),
  },
];

const HelpandSupport = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Help & Support</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={faqStyle.faqBox}>
          <div style={faqStyle.faqHeader} onClick={() => toggleAnswer(index)}>
            <p><strong>{faq.question}</strong></p>
            <span style={{ transform: activeIndex === index ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>⇛</span>
          </div>
          {activeIndex === index && (
            <div style={faqStyle.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HelpandSupport;
