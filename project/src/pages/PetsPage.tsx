import React, { useState } from 'react';
import { Filter, Search, ChevronDown } from 'lucide-react';
import PetList from '../components/pets/PetList';
import Button from '../components/ui/Button';
import { mockPets } from '../data/mockData';
import { AnimalType, PetStatus } from '../types';

const PetsPage: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredPets, setFilteredPets] = useState(mockPets);
  
  // Filter state
  const [filters, setFilters] = useState({
    type: '' as AnimalType | '',
    status: '' as PetStatus | '',
    location: '',
    ageMin: '',
    ageMax: '',
    vaccinated: false
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFilters(prev => ({ ...prev, [name]: checked }));
    } else {
      setFilters(prev => ({ ...prev, [name]: value }));
    }
  };

  const applyFilters = () => {
    let results = mockPets;
    
    if (filters.type) {
      results = results.filter(pet => pet.type === filters.type);
    }
    
    if (filters.status) {
      results = results.filter(pet => pet.status === filters.status);
    }
    
    if (filters.location) {
      results = results.filter(pet => 
        pet.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    if (filters.ageMin) {
      results = results.filter(pet => pet.age >= parseInt(filters.ageMin));
    }
    
    if (filters.ageMax) {
      results = results.filter(pet => pet.age <= parseInt(filters.ageMax));
    }
    
    if (filters.vaccinated) {
      results = results.filter(pet => pet.isVaccinated);
    }
    
    setFilteredPets(results);
  };

  const resetFilters = () => {
    setFilters({
      type: '',
      status: '',
      location: '',
      ageMin: '',
      ageMax: '',
      vaccinated: false
    });
    setFilteredPets(mockPets);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#3D405B] mb-2">Find Your Perfect Pet</h1>
          <p className="text-gray-600">Browse available pets for adoption, sale or exchange.</p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by location, breed..."
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-[#3D405B] focus:ring focus:ring-[#3D405B] focus:ring-opacity-50"
                value={filters.location}
                name="location"
                onChange={handleFilterChange}
              />
            </div>
            <div>
              <Button 
                leftIcon={<Filter className="h-5 w-5" />}
                variant="outline"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                Filters
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          </div>
          
          {/* Expanded Filters */}
          {isFilterOpen && (
            <div className="mt-4 pt-4 border-t">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pet Type
                  </label>
                  <select
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#3D405B] focus:ring focus:ring-[#3D405B] focus:ring-opacity-50"
                  >
                    <option value="">Any Type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    value={filters.status}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#3D405B] focus:ring focus:ring-[#3D405B] focus:ring-opacity-50"
                  >
                    <option value="">Any Status</option>
                    <option value="adoption">For Adoption</option>
                    <option value="sale">For Sale</option>
                    <option value="exchange">For Exchange</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Min Age
                    </label>
                    <input
                      type="number"
                      name="ageMin"
                      value={filters.ageMin}
                      onChange={handleFilterChange}
                      min="0"
                      placeholder="Min"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#3D405B] focus:ring focus:ring-[#3D405B] focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Max Age
                    </label>
                    <input
                      type="number"
                      name="ageMax"
                      value={filters.ageMax}
                      onChange={handleFilterChange}
                      min="0"
                      placeholder="Max"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#3D405B] focus:ring focus:ring-[#3D405B] focus:ring-opacity-50"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="vaccinated"
                    name="vaccinated"
                    checked={filters.vaccinated}
                    onChange={handleFilterChange}
                    className="h-4 w-4 text-[#3D405B] focus:ring-[#3D405B] rounded"
                  />
                  <label htmlFor="vaccinated" className="ml-2 text-sm text-gray-700">
                    Vaccinated Only
                  </label>
                </div>
                
                <div className="ml-auto">
                  <Button 
                    variant="ghost" 
                    className="mr-2" 
                    onClick={resetFilters}
                  >
                    Reset
                  </Button>
                  <Button onClick={applyFilters}>
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPets.length} pets
          </p>
        </div>
        
        {/* Pet Listings */}
        {filteredPets.length > 0 ? (
          <PetList pets={filteredPets} />
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No pets found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetsPage;