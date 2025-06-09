import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

// Home Page Component
const HomePage = () => (
  <>
    <section id="home">
      <Hero />
    </section>
    
    <section id="about">
      <About />
    </section>
    
    <section id="projects">
      <Projects />
    </section>
    
    <section id="contact">
      <Contact />
    </section>
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
