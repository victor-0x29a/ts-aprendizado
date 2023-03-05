// Interfaces
type Genre = "Action" | "Rpg";
interface Game {
  title: string;
  description: string;
  readonly price: number;
  genre: Genre;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const first: Game = {
  title: "The Last Of Us",
  description: "Ssss",
  price: 15.2,
  genre: "Action",
  platform: ["PS4", "PS3"],
  getSimilars: (title: string) => {
    console.log(`Similiar games to ${title}: Uncharted, A plague tale`);
  },
};
if (first.getSimilars) {
  first.getSimilars(first.title);
}
interface DLC extends Game {
  newContent: string[];
}
const lleftB: DLC = {
  title: "The Last of Us",
  description: "Ssss",
  price: 15.2,
  genre: "Action",
  platform: ["PS4", "PS3"],
  getSimilars: (title: string) => {
    console.log(`Similiar games to ${title}: Uncharted, A plague tale`);
  },
  newContent: ["NEW ZOMBIES"],
};

class createGame implements Game {
  title: string;
  description: string;
  genre: Genre;
  price: number;
  constructor(t: string, d: string, g: Genre, p: number) {
    this.title = t;
    this.description = d;
    this.genre = g;
    this.price = p;
  }
}
