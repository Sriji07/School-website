import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/about/about';
import History from './components/about/history';
import Mission from './components/about/mission';
import Vision from './components/about/vision';
import Admission from './components/Admission/admission';
import Procedure from './components/Admission/procedure'; // Import Procedure
import Registration from './components/Admission/registration'; // Import Registration
import Withdrawal from './components/Admission/withdrawal'; // Import Withdrawal
import Infrastructure from './components/Infrastructure/infrastructure';
import Notices from './components/Notices/Notices';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/admission/procedure" element={<Procedure />} /> {/* Add Procedure Route */}
          <Route path="/admission/registration" element={<Registration />} /> {/* Add Registration Route */}
          <Route path="/admission/withdrawal" element={<Withdrawal />} /> {/* Add Withdrawal Route */}
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/notices" element={<Notices />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
