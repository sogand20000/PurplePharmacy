/* import Realm from 'realm';

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
  public name: string;
  constructor(_id: number, name: string, tabiat: string, content: string) {
    this._id = _id;
    this.tabiat = tabiat;
    this.content = content;
    this.name = name;
  }
}

class DrugSchema {
  public static schema: Realm.ObjectSchema = {
    name: 'Drug',
    primaryKey: '_id',
    properties: {
      _id: 'int',
      categoryId: 'int',
      name: 'string?',
      usage: 'string?',
      mechanism: 'string?',
      pharmaco: 'string?',
      noUsage: 'string?',
      warning: 'string?',
      avarez: 'string?',
      tadakhol: 'string?',
      notes: 'string?',
      meghdarMasraf: 'string?',
      ashkal: 'string?',
      isFavorit: 'bool?',
    },
  };
  public _id: number;
  public categoryId: number;
  public name: string;
  public usage: string;
  public mechanism: string;
  public pharmaco: string;
  public noUsage: string;
  public warning: string;
  public avarez: string;
  public tadakhol: string;
  public notes: string;
  public meghdarMasraf: string;
  public ashkal: string;
  public isFavorit: string;

  constructor(
    _id: number,
    categoryId: number,
    name: string,
    usage: string,
    mechanism: string,
    pharmaco: string,
    noUsage: string,
    warning: string,
    avarez: string,
    tadakhol: string,
    notes: string,
    meghdarMasraf: string,
    ashkal: string,
    isFavorit: string,
  ) {
    this._id = _id;
    this.categoryId = categoryId;
    this.name = name;
    this.usage = usage;
    this.mechanism = mechanism;
    this.pharmaco = pharmaco;
    this.noUsage = noUsage;
    this.warning = warning;
    this.avarez = avarez;
    this.tadakhol = tadakhol;
    this.notes = notes;
    this.meghdarMasraf = meghdarMasraf;
    this.ashkal = ashkal;
    this.isFavorit = isFavorit;
  }
}

const RealmInstance = new Realm({
  schema: [DrugCategorySchema, AraghijatSchema, DrugSchema],
  schemaVersion: 6, ///when chanhe in migrate update or delete or chnge type must set schemaVersion
  //To migrate the realm to conform to the updated all schema, the developer sets the realm's schema version to 2....
});
export default RealmInstance;
 */