export class User {
    // syntaxe raccourci ne pas oublier public sinon ne marche pas
    // a faire seulement dans les models
  constructor(
    public image: string,
    public title: string,
    public age: number,
    public quote: string
  ) {}
}
