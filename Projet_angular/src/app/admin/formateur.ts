export class Formateur {
    constructor(
      public _id: number,
      public name: string,
      public lastName: string,
      public etat: string,
      public nbSessions: number,
    ) {}

    static fromJson(json) {
      return new Formateur(json._id, json.name, json.lastName, json.etat, json.nbSessions);
    }
  }
  