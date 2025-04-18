import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3D405B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <PawPrint className="h-8 w-8 text-[#F2CC8F]" />
              <span className="text-2xl font-bold">PawHub</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting pet lovers, previous owners, breeders, and local hospitals for the care and adoption of animals.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pets" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                  Find a Pet
                </Link>
              </li>
              <li>
                <Link to="/strays" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                  Report Stray Animal
                </Link>
              </li>
              <li>
                <Link to="/lost-found" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                  Lost & Found
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                  Pet Supplies
                </Link>
              </li>
              <li>
                <Link to="/hospitals" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                  Veterinary Hospitals
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                  Pet Care Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-[#F2CC8F] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#F2CC8F]" />
                <span className="text-gray-300">
                  123 Pet Street, Animal City, AC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#F2CC8F]" />
                <span className="text-gray-300">
                  (123) 456-7890
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#F2CC8F]" />
                <span className="text-gray-300">
                  info@pawhub.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} PawHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;