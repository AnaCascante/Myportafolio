import { useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';

function App() {
  const [] = useState(0);

  return (
    <Router>
      <NavBar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </Router>
  );
}

export default App;
