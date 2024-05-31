async function calculator() {
  const container = document.querySelector(".container");
  const display = document.createElement("div");
  const buttons = document.createElement("div");

  const button7 = document.createElement("button");
  const button8 = document.createElement("button");
  const button9 = document.createElement("button");
  const buttonDevide = document.createElement("button");
  const button4 = document.createElement("button");
  const button5 = document.createElement("button");
  const button6 = document.createElement("button");
  const buttonMult = document.createElement("button");

  const button0 = document.createElement("button");
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  const button3 = document.createElement("button");

  const buttonMinus = document.createElement("button");
  const buttonDot = document.createElement("button");
  const buttonEqual = document.createElement("button");
  const buttonPlus = document.createElement("button");
  const buttonC = document.createElement("button");
  const buttonArrow = document.createElement("button");

  display.classList.add("display");
  buttons.classList.add("buttons");

  button1.classList.add("button");
  button2.classList.add("button");
  button3.classList.add("button");
  button4.classList.add("button");
  button5.classList.add("button");
  button6.classList.add("button");
  button7.classList.add("button");
  button8.classList.add("button");
  button9.classList.add("button");
  button0.classList.add("button");

  buttonMinus.classList.add("Action");
  buttonDot.classList.add("Action");
  buttonEqual.classList.add("Action");
  buttonPlus.classList.add("Action");
  buttonC.classList.add("Action");
  buttonArrow.classList.add("Action");
  buttonDevide.classList.add("Action");
  buttonMult.classList.add("Action");

  container.appendChild(display);
  container.appendChild(buttons);
  buttons.appendChild(button7);
  buttons.appendChild(button8);
  buttons.appendChild(button9);
  buttons.appendChild(buttonDevide);
  buttons.appendChild(button4);
  buttons.appendChild(button5);
  buttons.appendChild(button6);
  buttons.appendChild(buttonMult);
  buttons.appendChild(button1);
  buttons.appendChild(button2);
  buttons.appendChild(button3);
  buttons.appendChild(buttonMinus);
  buttons.appendChild(button0);
  buttons.appendChild(buttonDot);
  buttons.appendChild(buttonEqual);
  buttons.appendChild(buttonPlus);
  buttons.appendChild(buttonC);
  buttons.appendChild(buttonArrow);

  display.textContent = "0";

  button1.textContent = "1";
  button2.textContent = "2";
  button3.textContent = "3";
  button4.textContent = "4";
  button5.textContent = "5";
  button6.textContent = "6";
  button7.textContent = "7";
  button8.textContent = "8";
  button9.textContent = "9";
  button0.textContent = "0";

  buttonMinus.textContent = "-";
  buttonDot.textContent = ".";
  buttonEqual.textContent = "=";
  buttonPlus.textContent = "+";
  buttonC.textContent = "C";
  buttonArrow.textContent = "←";
  buttonDevide.textContent = "/";
  buttonMult.textContent = "*";

  const buttonsValue = document.querySelectorAll(".button");
  console.log(buttonsValue);

  const buttonsActionValue = document.querySelectorAll(".Action");
  console.log(buttonsActionValue);

  const buttonsAll = document.querySelectorAll("button");
  console.log(buttonsAll);

  buttonsValue.forEach((button) => {
    button.addEventListener("click", () => {
      display.textContent = button.textContent;
    });
  });

  buttonsActionValue.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("Push");
      setTimeout(() => {
        button.classList.remove("Push");
      }, 1000);
    });
  });

  let displayArray = [];
  let operators = ["+", "-", "*", "/"];
  let someArray = [];
  let result = [];

  buttonsAll.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Button clicked:", button.textContent);
      console.log("Current displayArray:", displayArray);
      switch (button.textContent) {
        case "C":
          display.textContent = "0";
          displayArray = [];
          break;
        case "←":
          if (displayArray.length > 0) {
            displayArray.pop();

            if (displayArray.length === 0) {
              display.textContent = "0";
            } else {
              display.textContent = displayArray.join("");
            }
          }
          break;

        case ".":
          if (!displayArray.includes(".")) {
            displayArray.push(".");
            display.textContent = displayArray.join("");
          }
          break;

        case "+":
        case "-":
        case "*":
        case "/":
          if (displayArray.length === 0) {
            break; 
          }
          const lastChar = displayArray[displayArray.length - 1];
          if (!operators.includes(lastChar)) {
            displayArray.push(button.textContent);
            display.textContent = displayArray.join("");
          }
          break;
        case "=":
          try {
            const expression = displayArray.join("");
            const result = eval(expression);
            display.textContent = result;
            displayArray = [result.toString()];
          } catch (error) {
            display.textContent = "Error";
            displayArray = [];
          }
          break;

        default:
          displayArray.push(button.textContent);
          display.textContent = displayArray.join("");
      }
    });
  });
}

calculator();
