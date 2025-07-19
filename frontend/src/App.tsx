import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Quotes from './pages/Quotes';
import Career from './pages/Career';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Portpolio from './pages/Portpolio';
import Footer from './components/Footer';

export default function App() {

     return (
      <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/portfolio" element={<Portpolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quotes />} />
        <Route path="/career" element={<Career />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      </div>
      
  );
  
}
