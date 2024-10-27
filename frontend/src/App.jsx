import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectSections from './pages/ProjectSections';
import AboutUsSection from './pages/AboutUsSection';
import ContactUsSection from './pages/ContactUsSection';

function App() {
  return (
    <div style={{
      backgroundImage: "url('images/bg.png')", 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      width: '100%'
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<AboutUsSection />} />
        <Route path="/projects" element={<ProjectSections />} />
        <Route path="/contacts" element={<ContactUsSection />} />
      </Routes>
    </div>
  );
}

export default App;

