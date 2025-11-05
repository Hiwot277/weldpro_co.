import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
}
