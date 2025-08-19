// CommunityGuide.js
import React, { useState } from 'react';

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
  },
  heading: {
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1.5em',
    marginTop: '20px',
  },
  paragraph: {
    marginBottom: '10px',
  },
  ul: {
    listStyle: 'disc',
    marginLeft: '20px',
    marginBottom: '15px',
  },
  accordionButton: {
    backgroundColor: '#eee',
    color: '#333',
    cursor: 'pointer',
    padding: '12px',
    width: '100%',
    border: 'none',
    textAlign: 'left',
    fontSize: '16px',
    marginBottom: '5px',
  },
  panel: {
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    transition: 'max-height 0.2s ease-out',
    padding: '10px',
    marginBottom: '10px',
  },
  checkboxGroup: {
    marginBottom: '10px',
  }
};

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <>
    <button style={styles.accordionButton} onClick={onClick}>{title}</button>
    {isOpen && <div style={styles.panel}>{children}</div>}
  </>
);

const CommunityGuide = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Spam and Deceptive Practices',
      content: 'This includes fake engagement, impersonation, external links, and scams. Do not manipulate views, likes, or followers using multiple accounts.'
    },
    {
      title: 'Prohibited Content',
      content: (
        <>
          <p>
            Content involving child safety, nudity, or sexual content, suicide, and self-harm must adhere to our strict guidelines to protect users.
          </p>
          {[
            'Promoting terrorism',
            'Infiltrating bad things in society',
            'Trolling intensively',
            'Too much sexual content',
            'Abusive content',
            'Pranking video in bad way',
            'Harmful acts',
            'Promoting scams/spam',
            'Fake information',
            'Unnecessary video',
            'Promoting unsecure links',
            'Animal abuse',
          ].map((item, index) => (
            <div key={index} style={styles.checkboxGroup}>
              <label>
                <input type="checkbox" name="reason" value={item.toLowerCase().replace(/ /g, '_')} /> {item}
              </label>
            </div>
          ))}
        </>
      )
    },
    {
      title: 'Sensitive Content',
      content: 'Content involving child safety, nudity, or sexual content, suicide, and self-harm must adhere to our strict guidelines to protect users.'
    },
    {
      title: 'Violent or Dangerous Content',
      content: 'Violence, hate speech, and promotion of criminal organizations or regulated goods are prohibited to ensure a safe environment.'
    },
    {
      title: 'Misinformation',
      content: 'This covers elections misinformation, medical misinformation, and other misleading content. Provide accurate, verifiable information.'
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Community Guidelines</h1>
      <p style={styles.paragraph}>
        "Promotes a variety of information sources, enabling users to form their opinions independently and securely. To maintain our platform as a safe space for sharing and discussing meaningful content, we have established community guidelines."
      </p>
      <p style={styles.paragraph}>
        "Creators and Influencers should use very responsible words and body language."
      </p>

      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => toggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}

      <h2 style={styles.subheading}>Declaration of Indifference</h2>
      <p style={styles.paragraph}>
        The internet is full of wonder and adventure, it's also the internet though: all kinds of experiences can be had here. With that in mind, good behaviour and kindness will make a world of difference on MyAPP.
      </p>

      <h2 style={styles.subheading}>Basic Rules</h2>
      <ul style={styles.ul}>
        <li>You must be at least 13 years old to use MyAPP.</li>
        <li>You're responsible for the content and posts made under your channel/handle.</li>
        <li>You're responsible for keeping your password and other details safe.</li>
        <li>Don't spam other users repeatedly with messages/links etc.</li>
        <li>Don't use MyAPP for illegal activities, including sharing illegal or copyright-infringing content.</li>
        <li>Don’t use MyAPP to dox individuals or users.</li>
        <li>Don't manipulate views, likes, or tuners.</li>
        <li>Don't use MyAPP for deepfake scams.</li>
      </ul>

      <h2 style={styles.subheading}>Content Restrictions</h2>
      <p style={styles.paragraph}>
        We don’t care about what you publish, livestream, comment, or include in channel descriptions for the most part. However, we don’t allow the following:
      </p>
      <ul style={styles.ul}>
        <li>Content that incites hatred or violence towards a particular group or person(s).</li>
        <li>Content that promotes terrorism or criminal activity.</li>
        <li>Excessive bullying of persons not well-known within the public sphere.</li>
        <li>Content uploaded with the intent to shame, deceive, or insult a minor.</li>
        <li>Pornographic material.</li>
        <li>Animal abuse or torture.</li>
        <li>Gore or violent content, with exceptions for newsworthy content.</li>
        <li>Don’t upload piracy content</li>
        <li>Self-harm content.</li>
        <li>Harming individuals for views, likes and comments.</li>
        <li>Terrorist content and/or violent extremist acts.</li>
        <li>Scam, fake, deepfake engagement.</li>
        <li>Copyright-infringing material.</li>
      </ul>

      <h2 style={styles.subheading}>Comment Section Rules</h2>
      <p style={styles.paragraph}>
        All the rules listed above apply to both channel content and comments. In addition:
      </p>
      <ul style={styles.ul}>
        <li>Don’t use multiple channels to manipulate voting.</li>
        <li>Don’t create multiple channels to circumvent restrictions.</li>
        <li>Don’t be overly nasty to creators and other users.</li>
        <li>Don’t spam, including self-promotion, external links, and comment spamming.</li>
      </ul>

      <h2 style={styles.subheading}>Consequences for Violating Guidelines</h2>
      <ul style={styles.ul}>
        <li>Request for immediate content removal.</li>
        <li>Apply stricter actions, such as filtering your channel or restricting commenting.</li>
        <li>Repeated violations may lead to further restrictions.</li>
      </ul>

      <h2 style={styles.subheading}>Redemption</h2>
      <p style={styles.paragraph}>
        If you demonstrate a willingness to follow our community guidelines, we may lift restrictions applied to your account or channel.
      </p>

      <h2 style={styles.subheading}>What if We Get a Decision Wrong?</h2>
      <p style={styles.paragraph}>
        If you think we made a mistake, submit feedback to <a href="mailto:hello@MyAPP.com">hello@MyAPP.com</a> with your video URL reference.
      </p>

      <h2 style={styles.subheading}>Legal Compliance</h2>
      <p style={styles.paragraph}>
        These guidelines comply with:
        <ul>
          <li><strong>India:</strong> Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</li>
          <li><strong>Global:</strong> Local regulations and international digital safety standards</li>
        </ul>
      </p>
      <div class="content-policies">  
        <h2>1. Content Policies: cover restrictions on prohibited or inappropriate content</h2>  
          
        <div class="guideline">  
            <h3>Hate Speech</h3>  
            <p>Content targeting protected groups (caste, religion, regional, race, ethnicity, gender, disability, sexual orientation) with intent to incite violence, discrimination, or hatred.</p>  
            <p class="example">Example: Casteist slurs, communal incitement, or derogatory remarks about marginalized communities.</p>  
        </div>  
  
        <div class="guideline">  
            <h3>Violence & Graphic Content</h3>  
            <p> Explicit depictions of real or simulated violence, self-harm, or animal cruelty. Exceptions: Educational/medical content with warnings.</p>  
        </div>  
  
        <div class="guideline">  
            <h3>Sexual Content</h3>  
            <p>Pornography, non-consensual imagery, or content exploiting minors (POCSO Act compliance). Exceptions: Sex education with age-gating.</p>  
        </div>  
  
        <div class="guideline">  
            <h3>Misinformation</h3>  
            <p> False claims presented as fact (e.g., health scams, election fraud, deepfakes). Exceptions: Satire labeled as such.</p>  
        </div>  
  
        <div class="guideline">  
            <h3>Copyright Infringement</h3>  
            <p>Unauthorized use of copyrighted material (music, films, software) without permission or excessive fair use.</p>  
        </div>  
  
        <div class="guideline">  
            <h3>Impersonation</h3>  
            <p>Pretending to be someone else (celebrities, public figures, brands) to deceive viewers.</p>  
        </div>  
  
        <div class="guideline">  
            <h3>Spam & Scams</h3>  
            <p>Content promoting phishing, fake giveaways, or misleading links to extract personal/financial data.</p>  
        </div>  
  
        <div class="guideline">  
            <h3>Child Exploitation</h3>  
            <p>Content depicting minors in unsafe situations, grooming, or sexualized poses (complies with POCSO Act).</p>  
        </div>  
  
        <div class="guideline">  
            <h3>Self-Harm & Suicide</h3>  
            <p>Graphic depictions of self-harm or suicide, including glorification or instructions.</p>  
        </div>  
  
        <div class="guideline">  
            <h3>Terrorism & Extremism</h3>  
            <p> Content promoting terrorist acts, radicalization, or banned organizations (per Indian laws like UAPA).</p>  
        </div>  
        <div class="guideline">
          <h3>Promoting bad in society</h3>
          <p></p>
        </div>
    </div>  

    <div class="legal-compliance">    
        <h2>2. Legal & Compliance: address activities with legal risks</h2>    
            
        <div class="guideline">    
            <h3>Defamation</h3>    
            <p><strong>Definition:</strong> False statements harming reputation (e.g., baseless allegations against individuals/brands).</p>    
        </div>    
    
        <div class="guideline">    
            <h3>Privacy Violations</h3>    
            <p><strong>Definition:</strong> Sharing personal data (location, phone numbers) without consent (IT Act 2000 compliance).</p>    
        </div>    
    
        <div class="guideline">    
            <h3>Election Interference</h3>    
            <p><strong>Definition:</strong> Content spreading false claims about voting, candidates, or election processes.</p>    
        </div>    
    
        <div class="guideline">    
            <h3>Drug Promotion</h3>    
            <p><strong>Definition:</strong> Advertising illegal substances (e.g., cannabis, synthetic drugs) or misuse of prescription drugs.</p>    
        </div>    
    
        <div class="guideline">    
            <h3>Cultural Insensitivity</h3>    
            <p><strong>Definition:</strong> Content disrespecting, spreading or giving fake information religious practices, festivals, or cultural symbols (e.g., mocking rituals).</p>    
        </div>    
    
        <div class="guideline">    
            <h3>Age Restrictions</h3>    
            <p><strong>Definition:</strong> Age-gating for mature content (e.g., smoking, alcohol) to prevent underage access.</p>    
        </div>    
    
        <div class="guideline">    
            <h3>Regional Restrictions</h3>    
            <p><strong>Definition:</strong> Content banned in specific Indian states (e.g., religiously sensitive material).</p>    
        </div>    
    
        <div class="guideline">    
            <h3>Data Protection</h3>    
            <p><strong>Definition:</strong> Compliance with India’s Digital Personal Data Protection Act (2023) for user data storage and consent.</p>    
        </div>   
        <div class="guideline">
            <h3>Deepfake Regulations</h3>
            <p><strong>Definition:</strong> Compliance with regulations on deepfake content to prevent misuse (e.g., impersonation, misinformation).</p>
        </div>
        <div class="guideline">
            <h3>Child Safety</h3>
            <p><strong>Definition:</strong> Adherence to the POCSO Act (Protection of Children from Sexual Offences) for content involving minors.</p>
        </div>
        <div class="guideline">
          <h3>Animal Abuse</h3> 
          <p><strong>Definition:</strong> Content depicting or promoting animal cruelty, in compliance with the Prevention of Cruelty to Animals Act.</p>
        </div>
    
        <div class="guideline">    
            <h3>Intellectual Property</h3>    
            <p><strong>Definition:</strong> Unauthorized use of copyrighted material (e.g., film clips, music snippets).</p>    
        </div>    
    
        <div class="guideline">    
            <h3>Sponsorship Disclosure</h3>    
            <p><strong>Definition:</strong> Paid promotions must be clearly labeled (e.g., #ad, "sponsored").</p>    
        </div>    
    </div>  
    <h2>User Behavior & Conduct Guidelines: focus on inappropriate interactions or actions by users</h2>

  <h3>Harassment & Bullying</h3>
  <p><strong>Definition:</strong> Repeated abusive comments, doxxing, or targeted attacks on individuals/groups.</p>
  <p><strong>Example:</strong> Persistent trolling, threats, or coordinated attacks against a user.</p>

  <h3>Fake Engagement</h3>
  <p><strong>Definition:</strong> Use of bots, click farms, or purchased views to manipulate metrics.</p>
  <p><strong>Example:</strong> Fake likes, views, or followers to inflate popularity unfairly.</p>

  <h3>Mass Flagging</h3>
  <p><strong>Definition:</strong> Coordinated reporting of content to suppress it unfairly (e.g., political/ideological bias).</p>
  <p><strong>Example:</strong> Organized campaigns to remove content based on personal or group bias.</p>

  <h3>Hateful Comments</h3>
  <p><strong>Definition:</strong> Comments containing slurs, threats, or discriminatory language.</p>
  <p><strong>Example:</strong> Racial slurs, sexist remarks, or religious discrimination.</p>

  <h3>Impersonation of Platforms</h3>
  <p><strong>Definition:</strong> Fake logos, branding, or claims of affiliation with the platform.</p>
  <p><strong>Example:</strong> Pretending to be a platform’s support team or using official branding.</p>

  <h3>Spam</h3>
  <p><strong>Definition:</strong> Mass-uploading irrelevant content to disrupt feeds or manipulate algorithms.</p>
  <p><strong>Example:</strong> Random videos, ads, or repetitive posts to clutter feeds.</p>

  <h3>Fake Reviews</h3>
  <p><strong>Definition:</strong> Fraudulent ratings or comments to mislead viewers (e.g., paid reviews).</p>
  <p><strong>Example:</strong> Paid reviews to boost or tank a product/service’s reputation.</p>

  <h3>Cyberbullying</h3>
  <p><strong>Definition:</strong> Targeted online abuse, including body-shaming or caste-based slurs.</p>
  <p><strong>Example:</strong> Social media harassment, targeted memes, or exclusionary behavior.</p>

  <h3>Doxxing</h3>
  <p><strong>Definition:</strong> Sharing private information (address, phone number) to harm or harass users.</p>
  <p><strong>Example:</strong> Leaking someone’s personal details to enable real-world harm.</p>

  <h3>Disruptive Behavior</h3>
  <p><strong>Definition:</strong> Trolling, hate raids, or organizing attacks against creators/communities.</p>
  <p><strong>Example:</strong> Coordinated raids on a creator’s content or community.</p>
  
    </div>
    
  );
};

export default CommunityGuide;
