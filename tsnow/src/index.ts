let [inputA, inputB] = [
  document.querySelector("#x") as HTMLInputElement,
  document.querySelector("#y") as HTMLInputElement,
];

let [botao, resultado] = [
  document.querySelector("#confirm")!,
  document.querySelector("#result")!,
];

botao.addEventListener("click", () => {
  resultado.innerHTML = `${Number(inputA.value) + Number(inputB.value)}`;
  [(inputA.value = ""), (inputB.value = "")];
});
