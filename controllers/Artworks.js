import { Artworks } from '../db/model/Association.js';
import { Artists } from '../db/model/Association.js';

export const getArtworks = async (req, res) => {
  try {
    const artworks = await Artworks.findAll({
      attributes: ['id', 'artwork_title', 'artwork_year', 'media'],
      include: {
        model: Artists,
        attributes: ['artist_name'],
      },
    });
    res.json(artworks);
  } catch (error) {
    console.log(error);
  }
};
