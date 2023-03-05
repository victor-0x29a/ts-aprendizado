// Type Aliases com Intersection

// accountinfo
// charinfo
// playerinfo

type accountInfo = {
  id: number;
  name: string;
  email?: string; // ? = Opcional, eu posso colocar o email ou nao
};

const Account: accountInfo = {
  id: 15,
  name: "victor",
  email: "oi@gmail.com",
};
const Conta: accountInfo = {
  id: 17,
  name: "lucas",
};

type charInfo = {
  nickname: string;
  level: number;
};
const char: charInfo = {
  nickname: "eovictorkrl",
  level: 520,
};

// Intersection
type PlayerInfo = accountInfo & charInfo; // Objeto com 2 tipos de types dentro

const Player: PlayerInfo = {
  id: 222,
  name: "oi",
  nickname: "eovictorkrl",
  email: "victor@gmail.com",
  level: 999,
};
