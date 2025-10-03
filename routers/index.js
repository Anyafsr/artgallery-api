import express from 'express';
import {
  getVisitors,
  getVisitorsById,
  addVisitor,
  updateVisitor,
  deleteVisitor,
} from '../controllers/Visitors.js';
import {
  getArtists,
  getArtistsById,
  addArtist,
  updateArtist,
  deleteArtist,
} from '../controllers/Artists.js';
import {
  getArtworks,
  getArtworksById,
  addArtwork,
  updateArtwork,
  deleteArtwork,
} from '../controllers/Artworks.js';

const router = express.Router();

router.get('/visitors', getVisitors);
router.get('/visitors/:visitorID', getVisitorsById);
router.post('/visitors', addVisitor);
router.patch('/visitors/:visitorID', updateVisitor);
router.delete('/visitors/:visitorID', deleteVisitor);

router.get('/artists', getArtists);
router.get('/artists/:artistID', getArtistsById);
router.post('/artists', addArtist);
router.patch('/artists/:artistID', updateArtist);
router.delete('/artists/:artistID', deleteArtist);

router.get('/artworks', getArtworks);
router.get('/artworks/:artworkID', getArtworksById);
router.post('/artworks', addArtwork);
router.patch('/artworks/:artworkID', updateArtwork);
router.delete('/artworks/:artworkID', deleteArtwork);

export default router;
