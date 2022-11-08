//Importing react libraries and files.
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Importing the components and pages.
import Navbar from './components/navbar/navbar.js';
import Footer from './components/footer/footer.js';
import Landing from './pages/landing/landing.js';
import Login from './pages/login/login.js';
import Signup from './pages/signup/signup.js';
import Terms from './pages/terms/terms.js';
import NotFound from './pages/notfound/notfound.js';
import Workspace from './pages/workspace/workspace';
import Userdashboard from './pages/userdashboard/userdashboard';
import ProtectedRoutes from './components/authenticator/protected.routes';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>

        <Route path='/' exact element={<Landing />} />
        <Route path='terms' exact element={<Terms />} />
        <Route path='*' element={<NotFound />} />
        <Route path='signup' exact element={<Signup />} />
        <Route path='login' exact element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='workspace' exact element={<Workspace />} />
          <Route path='userdashboard' exact element={<Userdashboard />} />
        </Route>


      </Routes>
      <Footer />
    </div >
  );
}

export default App;
