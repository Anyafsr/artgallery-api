import { Artists } from '../db/model/Association.js';

export const getArtists = async (req, res) => {
  try {
    const artists = await Artists.findAll({
      attributes: ['id', 'artist_name', 'email', 'biography'],
    });
    res.json(artists);
  } catch (error) {
    console.log(error);
  }
};

export const getArtistsById = async (req, res) => {
  try {
    const { artistID } = req.params;
    const results = await Artists.findOne({
      where: {
        id: artistID,
      },
      attributes: ['artist_name', 'email', 'biography'],
    });
    if (!results) {
      res.status(400).json({
        msg: `Artist dengan ID: ${artistID}, tidak ditemukan.`,
      });
      return;
    }
    res.status(200).json({
      payload: {
        msg: `Berikut data artist dengan ID: ${artistID}`,
        datas: results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const addArtist = async (req, res) => {
  try {
    const { artist_name, email, biography } = req.body;
    const artist = await Artists.create({ artist_name, email, biography });
    res.status(201).json({
      payload: {
        msg: `Berikut data artist yang berhasil ditambahkan`,
        datas: artist,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateArtist = async (req, res) => {
  try {
    const { artistID } = req.params;
    const { artist_name, email, biography } = req.body;
    const artist = await Artists.update(
      { artist_name, email, biography },
      { where: { id: artistID } }
    );
    const results = await Artists.findOne({
      where: { id: artistID },
      attributes: ['artist_name', 'email', 'biography'],
    });
    res.status(200).json({
      payload: {
        msg: `Berikut data terbaru artist dengan ID: ${artistID}`,
        datas: results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteArtist = async (req, res) => {
  try {
    const { artistID } = req.params;
    const artist = await Artists.destroy({ where: { id: artistID } });
    res.status(200).json({
      payload: {
        msg: `Data artist berhasil dihapus.`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
