import './App.css';
import HeaderSection from './Components/HeaderSection';
import AboutMeSection from './Components/AboutMeSection';
import MyWorkSection from './Components/MyWorkSection';
import ContactSection from './Components/Contact Section';
import SkillCarousel from './Components/SkillCarousel';
import FooterSection from './FooterSection';

function App() {
  return (
    <div className="app-container">
      <HeaderSection />
      <SkillCarousel />
      <AboutMeSection />
      <MyWorkSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
