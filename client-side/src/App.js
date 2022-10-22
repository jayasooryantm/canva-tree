//Importing react libraries and files.
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importing the components and pages.
import Navbar from './components/navbar/navbar.js';
import Footer from './components/footer/footer.js';
import Landing from './pages/landing/landing.js';
import Login from './pages/login/login.js';
import Signup from './pages/signup/signup.js';
import Terms from './pages/terms/terms.js';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/terms' exact element={<Terms />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
