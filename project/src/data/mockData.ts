import { User, Pet, StrayAnimal, Hospital, Product, LostFoundPet } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'adopter',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    isVerified: true,
    location: 'New York, NY',
    joinedDate: '2023-05-15',
    bio: 'Animal lover looking to adopt a new furry friend.'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'owner',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    isVerified: true,
    location: 'Los Angeles, CA',
    joinedDate: '2023-04-10',
    bio: 'Pet owner with experience in dog training.'
  },
  {
    id: '3',
    name: 'Dr. Mark Wilson',
    email: 'mark@vetclinic.com',
    role: 'veterinarian',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    isVerified: true,
    location: 'Chicago, IL',
    joinedDate: '2023-01-20',
    bio: 'Veterinarian with 10+ years of experience.'
  }
];

export const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Max',
    type: 'dog',
    breed: 'Golden Retriever',
    age: 2,
    gender: 'male',
    size: 'large',
    status: 'adoption',
    images: [
      'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Max is a friendly Golden Retriever who loves to play fetch and go for walks.',
    location: 'New York, NY',
    ownerId: '2',
    isVaccinated: true,
    medicalHistory: 'Regular checkups, all vaccinations up to date.',
    createdAt: '2023-06-01',
    updatedAt: '2023-06-01'
  },
  {
    id: '2',
    name: 'Luna',
    type: 'cat',
    breed: 'Siamese',
    age: 1,
    gender: 'female',
    size: 'small',
    status: 'adoption',
    images: [
      'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Luna is a playful Siamese cat who loves attention and cuddling.',
    location: 'Los Angeles, CA',
    ownerId: '2',
    isVaccinated: true,
    medicalHistory: 'Spayed, all vaccinations up to date.',
    createdAt: '2023-06-05',
    updatedAt: '2023-06-05'
  },
  {
    id: '3',
    name: 'Rocky',
    type: 'dog',
    breed: 'Bulldog',
    age: 3,
    gender: 'male',
    size: 'medium',
    status: 'sale',
    price: 500,
    images: [
      'https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Rocky is a well-trained bulldog with a gentle temperament.',
    location: 'Chicago, IL',
    ownerId: '2',
    isVaccinated: true,
    medicalHistory: 'Regular checkups, minor surgery at age 1.',
    createdAt: '2023-05-20',
    updatedAt: '2023-05-25'
  },
  {
    id: '4',
    name: 'Oliver',
    type: 'cat',
    breed: 'Maine Coon',
    age: 2,
    gender: 'male',
    size: 'large',
    status: 'adoption',
    images: [
      'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Oliver is a majestic Maine Coon looking for a loving home.',
    location: 'Seattle, WA',
    ownerId: '1',
    isVaccinated: true,
    medicalHistory: 'All vaccinations up to date, regular checkups.',
    createdAt: '2023-06-10',
    updatedAt: '2023-06-10'
  }
];

export const mockStrayAnimals: StrayAnimal[] = [
  {
    id: '1',
    type: 'dog',
    breed: 'Mixed',
    estimatedAge: '1-2 years',
    gender: 'male',
    size: 'medium',
    images: [
      'https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Found wandering near the park, appears to be well-behaved but hungry.',
    location: 'Central Park, New York, NY',
    reportedBy: '1',
    status: 'reported',
    createdAt: '2023-06-15',
    updatedAt: '2023-06-15'
  },
  {
    id: '2',
    type: 'cat',
    estimatedAge: '6 months',
    gender: 'unknown',
    size: 'small',
    images: [
      'https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Kitten found in alleyway, appears to be malnourished.',
    location: 'Downtown Los Angeles, CA',
    reportedBy: '2',
    status: 'rescued',
    assignedHospital: '1',
    createdAt: '2023-06-12',
    updatedAt: '2023-06-13'
  }
];

export const mockHospitals: Hospital[] = [
  {
    id: '1',
    name: 'PetCare Veterinary Clinic',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    phone: '(212) 555-1234',
    email: 'info@petcare.com',
    website: 'www.petcare.com',
    services: ['Emergency Care', 'Surgery', 'Vaccination', 'Grooming'],
    isVerified: true
  },
  {
    id: '2',
    name: 'Healthy Paws Animal Hospital',
    address: '456 Oak Ave',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
    phone: '(323) 555-6789',
    email: 'info@healthypaws.com',
    website: 'www.healthypaws.com',
    services: ['Emergency Care', 'Dental', 'X-ray', 'Boarding'],
    isVerified: true
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Dog Food',
    category: 'food',
    price: 29.99,
    description: 'High-quality dog food with balanced nutrition.',
    images: [
      'https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    sellerId: '2',
    stock: 50,
    rating: 4.5,
    createdAt: '2023-05-10',
    updatedAt: '2023-05-10'
  },
  {
    id: '2',
    name: 'Cat Climbing Tree',
    category: 'toys',
    price: 79.99,
    description: 'Multi-level cat tree with scratching posts and hideaway spots.',
    images: [
      'https://images.pexels.com/photos/7210292/pexels-photo-7210292.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    sellerId: '1',
    stock: 15,
    rating: 4.7,
    createdAt: '2023-05-15',
    updatedAt: '2023-05-15'
  }
];

export const mockLostFoundPets: LostFoundPet[] = [
  {
    id: '1',
    type: 'dog',
    breed: 'Beagle',
    color: 'Brown and white',
    size: 'medium',
    gender: 'male',
    images: [
      'https://images.pexels.com/photos/6131445/pexels-photo-6131445.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Last seen wearing a red collar with tags.',
    lastSeenLocation: 'Central Park, New York, NY',
    lastSeenDate: '2023-06-14',
    contactName: 'John Doe',
    contactPhone: '(212) 555-1234',
    contactEmail: 'john@example.com',
    status: 'lost',
    createdAt: '2023-06-14',
    updatedAt: '2023-06-14'
  },
  {
    id: '2',
    type: 'cat',
    breed: 'Tabby',
    color: 'Orange and white',
    size: 'small',
    gender: 'female',
    images: [
      'https://images.pexels.com/photos/7439141/pexels-photo-7439141.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: 'Found with a blue collar, very friendly.',
    lastSeenLocation: 'Silver Lake, Los Angeles, CA',
    lastSeenDate: '2023-06-13',
    contactName: 'Jane Smith',
    contactPhone: '(323) 555-6789',
    contactEmail: 'jane@example.com',
    status: 'found',
    createdAt: '2023-06-13',
    updatedAt: '2023-06-13'
  }
];