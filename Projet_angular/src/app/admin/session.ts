export class Session {
  constructor(
    public _id: number,
    public name: string,
    public track: string,
    public formateur: string,
    public date: Date,
    public duree: number,
    public adress: string,
    public participants: number,
    public isCompleted: boolean) {  }
  static fromJson(json) {
    return new Session(json._id, json.name, json.track, json.formateur, json.date, json.duree, json.adress, json.participants, json.isCompleted);
  }
}

