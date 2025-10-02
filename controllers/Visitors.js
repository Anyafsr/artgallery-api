import { Visitors } from '../db/model/Association.js';

export const getVisitors = async (req, res) => {
  try {
    const visitors = await Visitors.findAll({
      attributes: ['id', 'visitor_name', 'email'],
    });
    res.json(visitors);
  } catch (error) {
    console.log(error);
  }
};

export const getVisitorsById = async (req, res) => {
  try {
    const { visitorID } = req.params;
    const results = await Visitors.findOne({
      where: {
        id: visitorID,
      },
      attributes: ['visitor_name', 'email'],
    });
    if (!results) {
      res.status(400).json({
        msg: `Visitor dengan ID: ${visitorID}, tidak ditemukan.`,
      });
      return;
    }
    res.status(200).json({
      payload: {
        msg: `Berikut data visitor dengan ID: ${visitorID}`,
        datas: results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const addVisitor = async (req, res) => {
  try {
    const { visitor_name, email } = req.body;
    const visitor = await Visitors.create({ visitor_name, email });
    res.status(201).json({
      payload: {
        msg: `Berikut data visitor yang berhasil ditambahkan`,
        datas: visitor,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateVisitor = async (req, res) => {
  try {
    const { visitorID } = req.params;
    const { visitor_name, email } = req.body;
    const visitor = await Visitors.update(
      { visitor_name, email },
      { where: { id: visitorID } }
    );
    const results = await Visitors.findOne({
      where: { id: visitorID },
      attributes: ['visitor_name', 'email'],
    });
    res.status(200).json({
      payload: {
        msg: `Berikut data terbaru visitor dengan ID: ${visitorID}`,
        datas: results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteVisitor = async (req, res) => {
  try {
    const { visitorID } = req.params;
    const visitor = await Visitors.destroy({ where: { id: visitorID } });
    res.status(200).json({
      payload: {
        msg: `Data visitor berhasil dihapus.`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
