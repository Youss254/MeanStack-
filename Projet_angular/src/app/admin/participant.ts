export class Participant {
    constructor(
      public _id: number,
      public name: string,
      public cin:number,
      public nbsessions:number)
       {  }
    static fromJson(json) {
      return new Participant(json._id, json.name, json.cin, json.nbsessions);
    }
  }
  