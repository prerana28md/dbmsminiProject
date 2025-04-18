import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PawPrint, Search, ShoppingBag, Heart, User } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8 text-[#E07A5F]" />
            <span className="text-2xl font-bold text-[#3D405B]">PawHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/pets" className="text-[#3D405B] hover:text-[#E07A5F] transition-colors">
              Adopt
            </Link>
            <Link to="/strays" className="text-[#3D405B] hover:text-[#E07A5F] transition-colors">
              Report Stray
            </Link>
            <Link to="/lost-found" className="text-[#3D405B] hover:text-[#E07A5F] transition-colors">
              Lost & Found
            </Link>
            <Link to="/marketplace" className="text-[#3D405B] hover:text-[#E07A5F] transition-colors">
              Marketplace
            </Link>
            <Link to="/hospitals" className="text-[#3D405B] hover:text-[#E07A5F] transition-colors">
              Hospitals
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[#3D405B] hover:text-[#E07A5F] transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/favorites" className="text-[#3D405B] hover:text-[#E07A5F] transition-colors">
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/marketplace/cart" className="text-[#3D405B] hover:text-[#E07A5F] transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#3D405B]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/pets" 
                className="text-[#3D405B] hover:text-[#E07A5F] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Adopt
              </Link>
              <Link 
                to="/strays" 
                className="text-[#3D405B] hover:text-[#E07A5F] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Report Stray
              </Link>
              <Link 
                to="/lost-found" 
                className="text-[#3D405B] hover:text-[#E07A5F] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Lost & Found
              </Link>
              <Link 
                to="/marketplace" 
                className="text-[#3D405B] hover:text-[#E07A5F] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link 
                to="/hospitals" 
                className="text-[#3D405B] hover:text-[#E07A5F] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hospitals
              </Link>
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              <Link to="/favorites" className="text-[#3D405B] hover:text-[#E07A5F] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                <Heart className="h-5 w-5" />
              </Link>
              <Link to="/marketplace/cart" className="text-[#3D405B] hover:text-[#E07A5F] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                <ShoppingBag className="h-5 w-5" />
              </Link>
              <Link to="/profile" className="text-[#3D405B] hover:text-[#E07A5F] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                <User className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" fullWidth>Sign In</Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button fullWidth>Sign Up</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;