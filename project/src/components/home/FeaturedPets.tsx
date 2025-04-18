import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PetList from '../pets/PetList';
import { Pet } from '../../types';

interface FeaturedPetsProps {
  pets: Pet[];
}

const FeaturedPets: React.FC<FeaturedPetsProps> = ({ pets }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3D405B]">
            Featured Pets
          </h2>
          <Link 
            to="/pets" 
            className="flex items-center text-[#E07A5F] hover:text-[#D56C51] transition-colors"
          >
            View all 
            <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        <PetList pets={pets} />
      </div>
    </section>
  );
};

export default FeaturedPets;