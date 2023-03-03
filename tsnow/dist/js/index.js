"use strict";
let [inputA, inputB] = [
    document.querySelector("#x"),
    document.querySelector("#y"),
];
let [botao, resultado] = [
    document.querySelector("#confirm"),
    document.querySelector("#result"),
];
botao.addEventListener("click", () => {
    resultado.innerHTML = `${Number(inputA.value) + Number(inputB.value)}`;
    [(inputA.value = ""), (inputB.value = "")];
});
