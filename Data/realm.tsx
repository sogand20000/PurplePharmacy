import Realm from 'realm';

class DrugCategorySchema {
  public static schema: Realm.ObjectSchema = {
    name: 'DrugCategory1',
    primaryKey: '_id',
    properties: {
      _id: 'int',
      name: 'string',
      persianName: 'string',
    },
  };
  public id: number;
  public name: string;
  public persianName: string;
  constructor(id: number, name: string, persianName: string) {
    this.id = id;
    this.name = name;
    this.persianName = persianName;
  }
}

class AraghijatSchema {
  public static schema: Realm.ObjectSchema = {
    name: 'Araghijat2',
    primaryKey: '_id',
    properties: {
      _id: 'int',
      name: 'string',
      tabiat: 'string?',
      content: 'string?',
    },
  };
  public id: number;
  public tabiat: string;
  public content: string;
  constructor(_id: number, tabiat: string, content: string) {
    this.id = _id;
    this.tabiat = tabiat;
    this.content = content;
  }
}

const RealmInstance = new Realm({
  schema: [DrugCategorySchema, AraghijatSchema],
});
export default RealmInstance;
