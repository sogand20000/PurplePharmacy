import {createServer, Model} from 'miragejs';
import AraghijatData from './../Data/Araghijat.json';
import DrugcategoryData from './../Data/Drugcategory.json';

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
    this.get('/drugcategory', () => {
      return {
        drugcategory: DrugcategoryData,
      };
    });
  },
});
