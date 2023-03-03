"use strict";
class Mathematics {
    constructor(operatorXSUM, operatorYSUM, operatorResultSUM, operatorXSUB, operatorYSUB, operatorResultSUB, operatorXDIV, operatorYDIV, operatorResultDIV) {
        this.sumInit({
            X: operatorXSUM,
            Y: operatorYSUM,
            Result: operatorResultSUM,
        });
        this.subInit({
            X: operatorXSUB,
            Y: operatorYSUB,
            Result: operatorResultSUB,
        });
        this.divInit({
            X: operatorXDIV,
            Y: operatorYDIV,
            Result: operatorResultDIV,
        });
    }
    sumInit(Operators) {
        Operators["X"].addEventListener("keyup", (event) => {
            Operators["Result"].innerHTML = `= ${Number(Operators["X"].value) + Number(Operators["Y"].value)}`;
        });
        Operators["Y"].addEventListener("keyup", (event) => {
            Operators["Result"].innerHTML = `= ${Number(Operators["X"].value) + Number(Operators["Y"].value)}`;
        });
    }
    subInit(Operators) {
        Operators["X"].addEventListener("keyup", (event) => {
            Operators["Result"].innerHTML = `= ${Number(Operators["X"].value) - Number(Operators["Y"].value)}`;
        });
        Operators["Y"].addEventListener("keyup", (event) => {
            Operators["Result"].innerHTML = `= ${Number(Operators["X"].value) - Number(Operators["Y"].value)}`;
        });
    }
    divInit(Operators) {
        Operators["X"].addEventListener("keyup", (event) => {
            Operators["Result"].innerHTML = `= ${Number(Number.parseFloat(Operators["X"].value) /
                Number.parseFloat(Operators["Y"].value)).toFixed(2)}`;
        });
        Operators["Y"].addEventListener("keyup", (event) => {
            Operators["Result"].innerHTML = `= ${Number(Number.parseFloat(Operators["X"].value) /
                Number.parseFloat(Operators["Y"].value)).toFixed(2)}`;
        });
    }
}
new Mathematics(document.querySelector("#x-sum"), document.querySelector("#y-sum"), document.querySelector("#result-sum"), document.querySelector("#x-sub"), document.querySelector("#y-sub"), document.querySelector("#result-sub"), document.querySelector("#x-div"), document.querySelector("#y-div"), document.querySelector("#result-div"));
