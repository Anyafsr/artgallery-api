import { Locations } from '../db/model/Association.js';

export const getLocations = async (req, res) => {
  try {
    const locations = await Locations.findAll();
    res.json(locations);
  } catch (error) {
    console.log(error);
  }
};

export const getLocationsById = async (req, res) => {
  try {
    const { locationID } = req.params;
    const location = await Locations.findOne({ where: { id: locationID } });
    if (!location) {
      res.status(400).json({
        msg: `Location dengan ID: ${locationID}, tidak ditemukan.`,
      });
      return;
    }
    res.json(location);
    res.status(200).json({
      payload: {
        msg: `Berikut data location dengan ID: ${locationID}`,
        datas: location,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const addLocation = async (req, res) => {
  try {
    const {
      location_name,
      location_address,
      city,
      capacity,
      country,
    } = req.body;
    const location = await Locations.create({
      location_name,
      location_address,
      city,
      capacity,
      country,
    });
    res.status(201).json({
      payload: {
        msg: `Berikut data location yang berhasil ditambahkan`,
        datas: location,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateLocation = async (req, res) => {
  try {
    const { locationID } = req.params;
    const {
      location_name,
      location_address,
      city,
      capacity,
      country,
    } = req.body;
    const location = await Locations.update(
      { location_name, location_address, city, capacity, country },
      { where: { id: locationID } }
    );
    res.status(200).json({
      payload: {
        msg: `Berikut data location yang berhasil diupdate`,
        datas: location,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteLocation = async (req, res) => {
  try {
    const { locationID } = req.params;
    const location = await Locations.destroy({ where: { id: locationID } });
    res.status(200).json({
      payload: {
        msg: `Data location berhasil dihapus.`,
        datas: location,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
