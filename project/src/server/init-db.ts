import { query } from './db';

const schema = `
-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL,
    avatar TEXT,
    is_verified BOOLEAN DEFAULT false,
    location VARCHAR(100),
    joined_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    bio TEXT
);

-- Create pets table
CREATE TABLE IF NOT EXISTS pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    breed VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    size VARCHAR(20),
    status VARCHAR(20) NOT NULL,
    description TEXT,
    location VARCHAR(100),
    owner_id INT,
    is_vaccinated BOOLEAN DEFAULT false,
    medical_history TEXT,
    price DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (owner_id) REFERENCES users(id)
);

-- Create pet_images table
CREATE TABLE IF NOT EXISTS pet_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pet_id INT,
    image_url TEXT NOT NULL,
    FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE
);

-- Create stray_animals table
CREATE TABLE IF NOT EXISTS stray_animals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    breed VARCHAR(100),
    estimated_age VARCHAR(50),
    gender VARCHAR(10),
    size VARCHAR(20),
    description TEXT,
    location VARCHAR(100),
    reported_by INT,
    status VARCHAR(20) NOT NULL,
    assigned_hospital INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (reported_by) REFERENCES users(id)
);

-- Create stray_animal_images table
CREATE TABLE IF NOT EXISTS stray_animal_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    stray_animal_id INT,
    image_url TEXT NOT NULL,
    FOREIGN KEY (stray_animal_id) REFERENCES stray_animals(id) ON DELETE CASCADE
);

-- Create hospitals table
CREATE TABLE IF NOT EXISTS hospitals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(200),
    city VARCHAR(100),
    state VARCHAR(50),
    zip_code VARCHAR(20),
    phone VARCHAR(20),
    email VARCHAR(100),
    website VARCHAR(200),
    services JSON,
    is_verified BOOLEAN DEFAULT false
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description TEXT,
    seller_id INT,
    stock INT NOT NULL,
    rating DECIMAL(3,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (seller_id) REFERENCES users(id)
);

-- Create product_images table
CREATE TABLE IF NOT EXISTS product_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    image_url TEXT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Create lost_found_pets table
CREATE TABLE IF NOT EXISTS lost_found_pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    breed VARCHAR(100),
    color VARCHAR(100),
    size VARCHAR(20),
    gender VARCHAR(10),
    description TEXT,
    last_seen_location VARCHAR(200),
    last_seen_date DATE,
    contact_name VARCHAR(100),
    contact_phone VARCHAR(20),
    contact_email VARCHAR(100),
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create lost_found_pet_images table
CREATE TABLE IF NOT EXISTS lost_found_pet_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lost_found_pet_id INT,
    image_url TEXT NOT NULL,
    FOREIGN KEY (lost_found_pet_id) REFERENCES lost_found_pets(id) ON DELETE CASCADE
);
`;

async function initializeDatabase() {
  try {
    // Split the schema into individual statements
    const statements = schema.split(';').filter(statement => statement.trim());
    
    // Execute each statement
    for (const statement of statements) {
      if (statement.trim()) {
        console.log('Executing statement:', statement.substring(0, 100) + '...');
        await query(statement);
      }
    }
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

initializeDatabase(); 