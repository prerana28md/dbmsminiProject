import React from 'react';
import { AlertTriangle, ShoppingBag, Stethoscope, Search } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Report Stray Animals",
    description: "Found a stray animal? Report it through our platform and connect with nearby animal hospitals for immediate help.",
    icon: <AlertTriangle className="h-10 w-10 text-white" />,
    bgColor: "bg-[#E07A5F]",
    link: "/strays"
  },
  {
    title: "Pet Marketplace",
    description: "Shop premium food, toys, accessories and more for your furry friends from verified sellers.",
    icon: <ShoppingBag className="h-10 w-10 text-white" />,
    bgColor: "bg-[#81B29A]",
    link: "/marketplace"
  },
  {
    title: "Veterinary Network",
    description: "Connect with verified veterinary clinics and hospitals for medical care, vaccinations, and emergencies.",
    icon: <Stethoscope className="h-10 w-10 text-white" />,
    bgColor: "bg-[#3D405B]",
    link: "/hospitals"
  },
  {
    title: "Lost & Found",
    description: "Lost your pet or found someone else's? Our platform helps reunite pets with their owners quickly.",
    icon: <Search className="h-10 w-10 text-white" />,
    bgColor: "bg-[#F2CC8F]",
    link: "/lost-found"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D405B] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            PawHub offers comprehensive services for all your pet needs, from adoption to healthcare and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={`${service.bgColor} p-6`}>
                <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3D405B] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;