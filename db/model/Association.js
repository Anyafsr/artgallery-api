import Visitors from './VisitorsModel.js';
import Tickets from './TicketsModel.js';
import Locations from './LocationsModel.js';
import Artworks from './ArtworksModel.js';
import Artists from './ArtistsModel.js';

const models = {
  Visitors,
  Tickets,
  Locations,
  Artworks,
  Artists,
};

//associator
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

export { Visitors, Tickets, Locations, Artworks, Artists };
export default models;
