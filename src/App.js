import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './ConditionalPages/About';
import CommunityGuide from './ConditionalPages/CommunityGuide';
import CopyRightPage from './ConditionalPages/CopyRightPolicy';
import TermsAndConditions from './ConditionalPages/TermsandConditions';
import PrivacyandCookiePolicy from './ConditionalPages/PrivacyandCookiePolicy';
import SendFeedback from './ConditionalPages/SendFeedback';
import CookiePolicy from './ConditionalPages/CookiePolicy';
import HelpandSupport from './ConditionalPages/HelpandSupport';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivacyandCookiePolicy />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/community-guide" element={<CommunityGuide />} />
        <Route path="/copy-right" element={<CopyRightPage />} />
        <Route path="/terms-cond" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyandCookiePolicy />} />
        <Route path="/send_feedback" element={<SendFeedback />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/help_support" element={<HelpandSupport />} />
      </Routes>
    </div>
  );
}

export default App;
 