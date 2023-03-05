// boolean (true || false)

let isOpen: boolean;
isOpen = false;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hix, binary)
let total: number;
total = 0x29a;

// array (type[])
let items: Object[];
items = [{ Oi: "top" }, { Oi: "ehissaeh" }];
let Total: Array<number>;
Total = [1, 2, 3, 4, 5, 6, 7, 8];

// tuple
let title: [number, string];
title = [1, "oi"];

// enum
enum Colors {
  white = "#ffffff",
  black = "#0000",
}

// any (qualquer coisa)
let coisa: any;
coisa = "asdasd";

// void
function Logger(): void {
  console.log(message);
}

// null | undefined
let tresCoisas: null;
let duasCoisas: undefined;
type Bla = string | undefined;

// never (nunca vai retornar)
function checkError(): never {
  throw new Error("error");
}

// object
let kart: object;
kart = { a: 1 };

// type inference (nao precisa definir o tipo, mas n pode mudar o tipo de valor depois de assinalar com algum valor)
let msg = "mensagem";
msg = "mensagem nova";
window.addEventListener("click", (e) => {
  console.log(e.target);
});
