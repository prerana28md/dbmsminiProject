import React from 'react';
import { Search } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#3D405B] to-[#E07A5F] text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1633522/pexels-photo-1633522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" }}
      >
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Your Perfect Furry Companion
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Connect with pets looking for a forever home, report strays, or find healthcare for your animal friends.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="animal-type" className="block text-gray-700 text-sm font-medium mb-1">
                  Animal Type
                </label>
                <select 
                  id="animal-type" 
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#3D405B] focus:ring focus:ring-[#3D405B] focus:ring-opacity-50 text-gray-700"
                >
                  <option value="">Any Type</option>
                  <option value="dog">Dogs</option>
                  <option value="cat">Cats</option>
                  <option value="bird">Birds</option>
                  <option value="rabbit">Rabbits</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="location" className="block text-gray-700 text-sm font-medium mb-1">
                  Location
                </label>
                <input 
                  type="text" 
                  id="location" 
                  placeholder="City, State" 
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#3D405B] focus:ring focus:ring-[#3D405B] focus:ring-opacity-50 text-gray-700"
                />
              </div>
              <div className="flex-shrink-0 self-end">
                <Button rightIcon={<Search className="h-4 w-4" />}>
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-6 text-sm text-gray-200">
            <span className="mr-2">Popular:</span>
            <a href="#" className="bg-white/20 px-3 py-1 rounded-full mr-2 mb-2 hover:bg-white/30 transition-colors">
              Golden Retriever
            </a>
            <a href="#" className="bg-white/20 px-3 py-1 rounded-full mr-2 mb-2 hover:bg-white/30 transition-colors">
              Siamese Cat
            </a>
            <a href="#" className="bg-white/20 px-3 py-1 rounded-full mr-2 mb-2 hover:bg-white/30 transition-colors">
              Puppies
            </a>
            <a href="#" className="bg-white/20 px-3 py-1 rounded-full mr-2 mb-2 hover:bg-white/30 transition-colors">
              Kittens
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 md:block hidden">
        <img 
          src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Happy dog" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;