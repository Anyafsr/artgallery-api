import { Tickets } from '../db/model/Association.js';
import { Visitors } from '../db/model/Association.js';
import { Locations } from '../db/model/Association.js';

export const getTickets = async (req, res) => {
  try {
    const tickets = await Tickets.findAll({
      attributes: ['id', 'ticket_code', 'purchase_date', 'ticket_price'],
      include: [
        {
          model: Visitors,
          attributes: ['visitor_name'],
        },
        {
          model: Locations,
          attributes: ['location_name'],
        },
      ],
    });
    res.status(200).json({
      payload: {
        msg: `Berikut data ticket`,
        datas: tickets,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTicketsById = async (req, res) => {
  try {
    const { ticketID } = req.params;
    const ticket = await Tickets.findOne({
      where: { id: ticketID },
      include: [
        {
          model: Visitors,
          attributes: ['visitor_name'],
        },
        {
          model: Locations,
          attributes: ['location_name'],
        },
      ],
    });
    if (!ticket) {
      return res.status(404).json({
        msg: `Ticket dengan ID: ${ticketID} tidak ditemukan.`,
      });
    }
    return res.status(200).json({
      payload: {
        msg: `Berikut data ticket dengan ID: ${ticketID}`,
        datas: ticket,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Terjadi kesalahan pada server.',
      error: error.message,
    });
  }
};

export const addTicket = async (req, res) => {
  try {
    const {
      ticket_code,
      purchase_date,
      ticket_price,
      id_visitor,
      id_locations,
    } = req.body;
    const ticket = await Tickets.create({
      ticket_code,
      purchase_date,
      ticket_price,
      id_visitor,
      id_locations,
    });
    res.json(ticket);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: `Ticket gagal ditambahkan.`,
    });
  }
};

export const updateTicket = async (req, res) => {
  try {
    const { ticketID } = req.params;
    const { ticket_code, purchase_date, ticket_price } = req.body;
    const ticket = await Tickets.update(
      { ticket_code, purchase_date, ticket_price },
      { where: { id: ticketID } }
    );
    const updatedTicket = await Tickets.findOne({
      where: { id: ticketID },
      include: [
        {
          model: Visitors,
          attributes: ['visitor_name'],
        },
        {
          model: Locations,
          attributes: ['location_name'],
        },
      ],
    });
    res.status(200).json({
      payload: {
        msg: `Ticket dengan ID: ${ticketID} berhasil diupdate`,
        datas: updatedTicket,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const { ticketID } = req.params;
    const ticket = await Tickets.destroy({ where: { id: ticketID } });
    res.json({
      msg: `Ticket dengan ID: ${ticketID} berhasil dihapus`,
    });
  } catch (error) {
    console.log(error);
  }
};
