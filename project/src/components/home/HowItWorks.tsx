import React from 'react';
import { Search, Heart, Home, Activity } from 'lucide-react';

const steps = [
  {
    title: "Search",
    description: "Browse thousands of pets available for adoption, sale, or exchange in your area.",
    icon: <Search className="h-12 w-12 text-[#F2CC8F]" />,
    color: "#F2CC8F"
  },
  {
    title: "Connect",
    description: "Find your perfect match and contact the pet owner or shelter directly through our platform.",
    icon: <Heart className="h-12 w-12 text-[#E07A5F]" />,
    color: "#E07A5F"
  },
  {
    title: "Adopt",
    description: "Complete the adoption process, welcome your new pet home, and start a beautiful journey together.",
    icon: <Home className="h-12 w-12 text-[#81B29A]" />,
    color: "#81B29A"
  },
  {
    title: "Care",
    description: "Access health records, find nearby vets, and get pet care advice to keep your pet healthy and happy.",
    icon: <Activity className="h-12 w-12 text-[#3D405B]" />,
    color: "#3D405B"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D405B] mb-4">
            How PawHub Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find, adopt, and care for pets with these simple steps. Our platform makes the entire process easy and enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div 
                className="flex items-center justify-center w-24 h-24 rounded-full mb-6"
                style={{ 
                  backgroundColor: `${step.color}20`,
                  boxShadow: `0 0 0 8px ${step.color}10`
                }}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#3D405B] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;