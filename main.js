import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
  <div class="wrapper">
    <div class="container">
      <div class="calculator">
        <div class="outputScreen">
        <div id="display-results"></div>
        <div id="display"></div>
        </div>
          <div class="btns-container" id="btns-parent">
            <button id="allClear">AC</button>
            <button id="divide">/</button>
            <button id="multiply">*</button>
            <button>-</button>
            <button>+</button>
            <div class="btns">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>.</button>
            <button id="equals">=</button>
            </div>
        </div>
      </div>
    </div>
  </div>
`;
  let outputScreen = document.querySelector("#display");
  let buttonsParent = document.querySelector("#btns-parent");
  let equals = document.querySelector("#equals");
  let allClear = document.querySelector("#allClear");
  let displayResults = document.querySelector('#display-results')

  let number = "";
  let result = "";
  outputScreen.textContent = "0";

  buttonsParent.addEventListener("click", (e) => {
      if (e.target) {
        switch (e.target.textContent) {
          case "=":
            return "";
          case "AC":
            return "";
          default:
            (number += e.target.textContent == "=" ? "" : e.target.textContent),
            (outputScreen.textContent = number);
          return;
        }
      }
    });

  function culc(num) {
    result = String(eval(num));
    displayResults.textContent = result;
    return result;
  }

  equals.addEventListener("click", () => culc(number));

  const clearScreen = () => {
    number = "";
    result = "";
    outputScreen.textContent = "0";
    displayResults.textContent = "";
  };

  allClear.addEventListener("click", clearScreen);
});
