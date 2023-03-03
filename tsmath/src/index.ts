interface Operator {
  X: HTMLInputElement;
  Y: HTMLInputElement;
  Result: HTMLSpanElement;
}
class Mathematics {
  constructor(
    operatorXSUM: HTMLInputElement,
    operatorYSUM: HTMLInputElement,
    operatorResultSUM: HTMLSpanElement,
    operatorXSUB: HTMLInputElement,
    operatorYSUB: HTMLInputElement,
    operatorResultSUB: HTMLSpanElement,
    operatorXDIV: HTMLInputElement,
    operatorYDIV: HTMLInputElement,
    operatorResultDIV: HTMLSpanElement
  ) {
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
  sumInit(Operators: Operator) {
    Operators["X"].addEventListener("keyup", (event: Event) => {
      Operators["Result"].innerHTML = `= ${
        Number(Operators["X"].value) + Number(Operators["Y"].value)
      }`;
    });
    Operators["Y"].addEventListener("keyup", (event: Event) => {
      Operators["Result"].innerHTML = `= ${
        Number(Operators["X"].value) + Number(Operators["Y"].value)
      }`;
    });
  }
  subInit(Operators: Operator) {
    Operators["X"].addEventListener("keyup", (event: Event) => {
      Operators["Result"].innerHTML = `= ${
        Number(Operators["X"].value) - Number(Operators["Y"].value)
      }`;
    });
    Operators["Y"].addEventListener("keyup", (event: Event) => {
      Operators["Result"].innerHTML = `= ${
        Number(Operators["X"].value) - Number(Operators["Y"].value)
      }`;
    });
  }
  divInit(Operators: Operator) {
    Operators["X"].addEventListener("keyup", (event: Event) => {
      Operators["Result"].innerHTML = `= ${Number(
        Number.parseFloat(Operators["X"].value) /
          Number.parseFloat(Operators["Y"].value)
      ).toFixed(2)}`;
    });
    Operators["Y"].addEventListener("keyup", (event: Event) => {
      Operators["Result"].innerHTML = `= ${Number(
        Number.parseFloat(Operators["X"].value) /
          Number.parseFloat(Operators["Y"].value)
      ).toFixed(2)}`;
    });
  }
}

new Mathematics(
  document.querySelector("#x-sum")!,
  document.querySelector("#y-sum")!,
  document.querySelector("#result-sum")!,
  document.querySelector("#x-sub")!,
  document.querySelector("#y-sub")!,
  document.querySelector("#result-sub")!,
  document.querySelector("#x-div")!,
  document.querySelector("#y-div")!,
  document.querySelector("#result-div")!
);
