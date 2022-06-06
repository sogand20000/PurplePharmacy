import {createServer, Model} from 'miragejs';
import AraghijatData from './../Data/Araghijat.json';
createServer({
  models: {
    movie: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/araghijat', () => {
      return {
        araghijat: AraghijatData,
      };
    });
  },
});
