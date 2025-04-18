import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Log the connection details (without password)
console.log('Attempting to connect to MySQL database:', {
  host: 'localhost',
  port: '3306',
  database: 'pawhub',
  user: 'root'
});

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'pawhub',
  user: 'root',
  password: 'Root@123',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection
pool.getConnection()
  .then(connection => {
    console.log('Successfully connected to the database');
    connection.release();
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

export const query = async (text: string, params?: any[]) => {
  const start = Date.now();
  try {
    const [rows, fields] = await pool.execute(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { 
      text, 
      duration, 
      rows: Array.isArray(rows) ? rows.length : 0,
      error: null 
    });
    return rows;
  } catch (error) {
    console.error('Error executing query', { 
      text, 
      error: error instanceof Error ? error.message : 'Unknown error',
      sqlMessage: error instanceof Error ? (error as any).sqlMessage : undefined
    });
    throw error;
  }
};

export default pool; 