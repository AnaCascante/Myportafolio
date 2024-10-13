import { useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './components/Hero';

//import AboutPage from '../../pages/VenuePage';
//import ProjectsPage from '../../pages/LoginPage';
//import Footer from '../Footer';

function App() {
  const [] = useState(0);

  return (
    <Router>
      <NavBar />
      <Hero />
      <Footer />
    </Router>
  );
}

export default App;

/*function AppTest() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/venue/:id" element={<VenuePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}*/
