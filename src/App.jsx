import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HeaderSection from './Components/HeaderSection';
import AboutMeSection from './Components/AboutMeSection';
import MyWorkSection from './Components/MyWorkSection';
import ContactSection from './Components/Contact Section';
function App() {
  return (
    <div className="app-container">
      <HeaderSection />
      <AboutMeSection />
      <MyWorkSection />
      <ContactSection />
    </div>
  );
}

export default App;
