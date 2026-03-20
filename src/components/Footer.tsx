import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">The CSE CIRCLE</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering future civil servants with quality education and comprehensive guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Courses</Link></li>
              <li><Link to="/faculty" className="hover:text-blue-400 transition-colors">Faculty</Link></li>
              <li><Link to="/results" className="hover:text-blue-400 transition-colors">Results</Link></li>
              <li><Link to="/resources" className="hover:text-blue-400 transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Foundation Course</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Optional Subjects</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Test Series</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Interview Guidance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Education Street, Rajendra Nagar, New Delhi - 110060</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@csecircle.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} The CSE CIRCLE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
