import eitaH from './eita-h.js';
import newAuthor from './new-author.js';

// Export all profiles
export const profiles = [
  eitaH,
  newAuthor
];

// Helper function to get profile by ID
export function getProfile(id) {
  return profiles.find(profile => profile.id === id);
}

// Helper function to get all profiles
export function getAllProfiles() {
  return profiles;
}
