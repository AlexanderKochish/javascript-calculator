import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `


document.querySelector('#app').innerHTML = `
  <div class="wrapper">
    <div class="container">
      <div class="calculator">
        <div class="outputScreen" id="display">0</div>
          <div class="btns-container">
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
`

let outputScreen = document.querySelector('#display')
let allButtons = document.querySelectorAll('button')
let equals = document.querySelector('#equals');

let number = '';
let result = '';

allButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if(e.target){
      number += e.target.textContent == '='? '':e.target.textContent
      outputScreen.textContent = number  
    }
  })
})


function culc(num){
  result = String(eval(num))
  return result;
}
equals.addEventListener('click', () => culc(number)) 
outputScreen.textContent = ''
outputScreen.textContent = result

setupCounter(document.querySelector('#counter'))
