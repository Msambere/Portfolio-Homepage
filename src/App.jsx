import './App.css';
import HeaderSection from './Components/HeaderSection';
import AboutMeSection from './Components/AboutMeSection';
import MyWorkSection from './Components/MyWorkSection';
import ContactSection from './Components/ContactSection';
import SkillCarousel from './Components/SkillCarousel';
import FooterSection from './Components/FooterSection';

function App() {
  return (
    <div className="app-container">
      <HeaderSection />
      <AboutMeSection />
      <SkillCarousel />
      <MyWorkSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
