import {
  Visitors,
  Tickets,
  Locations,
  Artworks,
  Artists,
} from '../db/model/Association.js';

export const initDatabase = async () => {
  try {
    await Visitors.sync();
    await Locations.sync();
    await Tickets.sync();
    await Artists.sync();
    await Artworks.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
    // Handle error as needed, e.g., throw error or exit process
    throw error;
  }
};
