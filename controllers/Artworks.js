import { Artworks } from '../db/model/Association.js';
import { Artists } from '../db/model/Association.js';
import { Locations } from '../db/model/Association.js';

export const getArtworks = async (req, res) => {
  try {
    const artworks = await Artworks.findAll({
      attributes: ['id', 'artwork_title', 'artwork_year', 'media'],
      include: [
        {
          model: Artists,
          attributes: ['artist_name'],
        },
        {
          model: Locations,
          attributes: ['location_name'],
        },
      ],
    });
    res.json(artworks);
  } catch (error) {
    console.log(error);
  }
};

export const getArtworksById = async (req, res) => {
  try {
    const { artworkID } = req.params;
    const results = await Artworks.findOne({
      where: { id: artworkID },
      attributes: ['artwork_title', 'artwork_year', 'media'],
      include: [
        {
          model: Artists,
          attributes: ['artist_name'],
        },
        {
          model: Locations,
          attributes: ['location_name'],
        },
      ],
    });
    if (!results) {
      res.status(400).json({
        msg: `Artwork dengan ID: ${artworkID}, tidak ditemukan.`,
      });
      return;
    }
    res.status(200).json({
      payload: {
        msg: `Berikut data artwork dengan ID: ${artworkID}`,
        datas: results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const addArtwork = async (req, res) => {
  try {
    const {
      artwork_title,
      artwork_year,
      media,
      id_artists,
      id_locations,
    } = req.body;
    const artwork = await Artworks.create({
      artwork_title,
      artwork_year,
      media,
      id_artists,
      id_locations,
    });
    const results = await Artworks.findOne({
      where: { id: artwork.id },
      attributes: ['artwork_title', 'artwork_year', 'media'],
      include: [
        {
          model: Artists,
          attributes: ['artist_name'],
        },
        {
          model: Locations,
          attributes: ['location_name'],
        },
      ],
    });
    res.status(201).json({
      payload: {
        msg: `Berikut data artwork yang berhasil ditambahkan`,
        datas: results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateArtwork = async (req, res) => {
  try {
    const { artworkID } = req.params;
    const {
      artwork_title,
      artwork_year,
      media,
      id_artists,
      id_locations,
    } = req.body;
    const artwork = await Artworks.update(
      { artwork_title, artwork_year, media, id_artists, id_locations },
      { where: { id: artworkID } }
    );
    const results = await Artworks.findOne({
      where: { id: artworkID },
      attributes: ['artwork_title', 'artwork_year', 'media'],
      include: [
        {
          model: Artists,
          attributes: ['artist_name'],
        },
        {
          model: Locations,
          attributes: ['location_name'],
        },
      ],
    });
    res.status(200).json({
      payload: {
        msg: `Berikut data artwork yang berhasil diupdate`,
        datas: results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteArtwork = async (req, res) => {
  try {
    const { artworkID } = req.params;
    const artwork = await Artworks.destroy({ where: { id: artworkID } });
    res.status(200).json({
      payload: {
        msg: `Data artwork berhasil dihapus.`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
