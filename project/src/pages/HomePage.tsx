import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedPets from '../components/home/FeaturedPets';
import HowItWorks from '../components/home/HowItWorks';
import ServicesSection from '../components/home/ServicesSection';
import CallToAction from '../components/home/CallToAction';
import { mockPets } from '../data/mockData';

const HomePage: React.FC = () => {
  // Use only 4 pets for featured section
  const featuredPets = mockPets.slice(0, 4);

  return (
    <div>
      <HeroSection />
      <FeaturedPets pets={featuredPets} />
      <HowItWorks />
      <ServicesSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;