import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const MONGO_URI = process.env.MONGO_URI;

export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};
