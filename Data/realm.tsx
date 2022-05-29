import Realm from 'realm';

class DrugCategorySchema {
  public static schema: Realm.ObjectSchema = {
    name: 'DrugCategory',
    primaryKey: '_id',
    properties: {
      _id: 'int',
      name: 'string',
      persianName: 'string',
    },
  };
  public _id: number;
  public name: string;
  public persianName: string;
  constructor(_id: number, name: string, persianName: string) {
    this._id = _id;
    this.name = name;
    this.persianName = persianName;
  }
}

class AraghijatSchema {
  public static schema: Realm.ObjectSchema = {
    name: 'Araghijat',
    primaryKey: '_id',
    properties: {
      _id: 'int',
      name: 'string',
      tabiat: 'string?',
      content: 'string?',
    },
  };
  public _id: number;
  public tabiat: string;
  public content: string;
  constructor(_id: number, tabiat: string, content: string) {
    this._id = _id;
    this.tabiat = tabiat;
    this.content = content;
  }
}

const RealmInstance = new Realm({
  schema: [DrugCategorySchema, AraghijatSchema],
});
export default RealmInstance;
