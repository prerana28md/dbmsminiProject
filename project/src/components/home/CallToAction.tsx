import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-[#3D405B]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Pet Companion?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join thousands of happy pet owners who found their furry friends through PawHub. 
            Start your journey today and bring home a new family member!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/pets">
              <Button size="lg" className="bg-[#E07A5F] hover:bg-[#D56C51] focus:ring-[#E07A5F]">
                Explore Pets
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 focus:ring-white">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;