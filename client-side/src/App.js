import './App.css';
import Navbar from './components/navbar/navbar.js';
import Footer from './components/footer/footer.js';
import Landing from './pages/landing/landing.js';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
