class UserAccount {
  protected name: string;
  protected age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  logDetails(): void {
    console.log(`the player ${this.name} is ${this.age} years old.`);
  }
}
let victao = new UserAccount("victao", 52);
victao.logDetails();
class CharAccount extends UserAccount {
  private nickname: string;
  private level: number;
  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    (this.nickname = nickname), (this.level = level);
  }
  get getLevel(): number {
    return this.level;
  }
  set setLevel(level: number) {
    this.level = level;
  }
  logChar(): void {
    console.log(`level ${this.level}`);
  }
}

let vic = new CharAccount("Victor Gomes", 17, "eovictorkrl", 520);
vic.logDetails();
vic.logChar();
console.log(vic.getLevel);
vic.setLevel = 50;
console.log(vic.getLevel);
