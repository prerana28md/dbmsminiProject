export type UserRole = 'adopter' | 'owner' | 'veterinarian' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  isVerified: boolean;
  location: string;
  joinedDate: string;
  bio?: string;
}

export type PetStatus = 'adoption' | 'sale' | 'exchange' | 'adopted' | 'sold';
export type PetSize = 'small' | 'medium' | 'large';
export type AnimalType = 'dog' | 'cat' | 'bird' | 'rabbit' | 'fish' | 'reptile' | 'other';

export interface Pet {
  id: string;
  name: string;
  type: AnimalType;
  breed: string;
  age: number;
  gender: 'male' | 'female';
  size: PetSize;
  status: PetStatus;
  images: string[];
  description: string;
  location: string;
  price?: number;
  ownerId: string;
  isVaccinated: boolean;
  medicalHistory?: string;
  createdAt: string;
  updatedAt: string;
}

export interface StrayAnimal {
  id: string;
  type: AnimalType;
  breed?: string;
  estimatedAge?: string;
  gender?: 'male' | 'female' | 'unknown';
  size: PetSize;
  images: string[];
  description: string;
  location: string;
  reportedBy: string;
  status: 'reported' | 'rescued' | 'treatment' | 'available';
  assignedHospital?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  website?: string;
  services: string[];
  isVerified: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: 'food' | 'toys' | 'accessories' | 'grooming' | 'medicine' | 'other';
  price: number;
  description: string;
  images: string[];
  sellerId: string;
  stock: number;
  rating?: number;
  createdAt: string;
  updatedAt: string;
}

export interface LostFoundPet {
  id: string;
  type: AnimalType;
  breed?: string;
  color: string;
  size: PetSize;
  gender?: 'male' | 'female' | 'unknown';
  images: string[];
  description: string;
  lastSeenLocation: string;
  lastSeenDate: string;
  contactName: string;
  contactPhone: string;
  contactEmail?: string;
  status: 'lost' | 'found' | 'reunited';
  createdAt: string;
  updatedAt: string;
}