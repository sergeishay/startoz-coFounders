import User from './user';
import mongoose from 'mongoose';

const CoFounderSchema = new mongoose.Schema({
  phoneNumber: String,
  profession: String,
  lookingToBe: [String], // array of strings
  desiredSectors: [String], // array of strings
  country: String,
  city: String,
  dateOfBirth: Date,
  aboutMe: String,
  experience: String,
  skills: [String], // array of strings
  personalWeb: String,
  linkedInProfileLink: String,
  // cv: String // You could store file path if file is uploaded or base64 string.
});

export default User.discriminator('CoFounder', CoFounderSchema);
