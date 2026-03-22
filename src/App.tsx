import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Faculty from './pages/Faculty';
import Results from './pages/Results';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Teachers from './pages/Teachers';
import Sociologyoptional from './pages/Sociologyoptional';
import Mathsoptional from './pages/MathsOptional';


function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/optional-math-pyq" element={<Courses />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/results" element={<Results />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/sociology-optional" element={<Sociologyoptional />} />
          <Route path="/maths-optional" element={<Mathsoptional />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
