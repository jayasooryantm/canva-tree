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
import NotFound from './pages/notfound/notfound.js';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/terms' exact element={<Terms />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
