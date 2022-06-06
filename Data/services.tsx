import {createServer, Model} from 'miragejs';
import AraghijatData from './../Data/Araghijat.json';
import DrugcategoryData from './../Data/Drugcategory.json';
import DrugData from './../Data/drug.json';

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
    this.get('/drug/:id', (schema, request) => {
      return {
        drug: DrugData.filter(
          item => item.categoryId.toString() == request.params.id,
        ),
      };
    });
    // this.get('/drug/:_id');
    /*    this.get('/drug/:id', (schema, request) => {
      let id = request.params.id;

      return schema.drug.filter('categoryId==1');
    });
    this.get('/drug/:id', () => {
      return {
        drug: DrugData.filter,
      };
    }); */
  },
});
