import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin } from 'lucide-react';
import { Pet } from '../../types';
import { Card, CardBody, CardFooter } from '../ui/Card';
import Badge from '../ui/Badge';

interface PetCardProps {
  pet: Pet;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  const statusBadgeVariant = (): 'primary' | 'secondary' | 'success' | 'warning' => {
    switch (pet.status) {
      case 'adoption':
        return 'primary';
      case 'sale':
        return 'secondary';
      case 'exchange':
        return 'warning';
      case 'adopted':
      case 'sold':
        return 'success';
      default:
        return 'primary';
    }
  };

  const statusText = {
    adoption: 'For Adoption',
    sale: 'For Sale',
    exchange: 'For Exchange',
    adopted: 'Adopted',
    sold: 'Sold'
  };

  return (
    <Card hoverable className="h-full">
      <div className="relative overflow-hidden h-48">
        <img 
          src={pet.images[0]} 
          alt={pet.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <button 
          className="absolute top-3 right-3 bg-white p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Add to favorites"
        >
          <Heart className="h-5 w-5 text-gray-500 hover:text-red-500 transition-colors" />
        </button>
        <Badge 
          variant={statusBadgeVariant()} 
          className="absolute bottom-3 left-3"
        >
          {statusText[pet.status]}
        </Badge>
      </div>
      <CardBody>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-[#3D405B]">{pet.name}</h3>
          {pet.price && <span className="font-semibold text-[#E07A5F]">${pet.price}</span>}
        </div>
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{pet.location}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="default">{pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}</Badge>
          <Badge variant="default">{pet.breed}</Badge>
          <Badge variant="default">{pet.age} {pet.age === 1 ? 'year' : 'years'}</Badge>
        </div>
        <p className="text-gray-600 line-clamp-2">{pet.description}</p>
      </CardBody>
      <CardFooter className="flex justify-between border-t">
        <span className={`text-xs ${pet.isVaccinated ? 'text-green-600' : 'text-amber-600'}`}>
          {pet.isVaccinated ? '✓ Vaccinated' : '○ Not Vaccinated'}
        </span>
        <Link 
          to={`/pets/${pet.id}`}
          className="text-[#3D405B] hover:text-[#E07A5F] text-sm font-medium transition-colors"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PetCard;