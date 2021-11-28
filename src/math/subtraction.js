import React from "react";
import Square from "../Other/backgroundSquare/Square"
import Button from 'react-bootstrap/Button'
// eslint-disable-next-line
import { BrowserRouter as Route } from "react-router-dom";
// eslint-disable-next-line
import Good from "./good";
import "./math.css";

let numbersOne2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let numbersTwo2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// eslint-disable-next-line

let numberOne2 = numbersOne2[Math.floor(Math.random() * 12)];
let numberTwo2 = numbersTwo2[Math.floor(Math.random() * 12)];
// eslint-disable-next-line
function reandom() {
  let randomTask2 = numberOne2 + "-" + numberTwo2;
  console.log(randomTask2);
  return randomTask2;
}

let resultat2 = numberOne2 - numberTwo2;

export default function Subtraction() {
  return (
    <div className= "Ekran">
    <div className="nocss">
      <div className="primer">
        <h1 id="numOneq2">{numberOne2}</h1>
        <h1 id="plus2">-</h1>
        <Square />
        <h1 id="numTwo2">{numberTwo2}</h1>
      </div>
      {/* eslint-disable-next-line */}
      <h1 id="numOne2"></h1>
      <a href="/NSK/subtraction">
        <button>Нова задача!</button>
      </a>

      <input
        id="elem12"
        required
        type="number"
        name="quantity"
        placeholder="Відповідь"
      />
      <Button id="butt" type="button" onClick={resultTester2} value="Готово">Перевірити</Button>
    </div>
    </div>
  );
}

function resultTester2() {
  let val2 = document.getElementById("elem12").value;
  let vall2 = parseInt(val2, 10);
  console.log(vall2);
  if (resultat2 === vall2) {
    console.log("Правильно");
    document.getElementById("numOne2").innerHTML = "Правильно";
  } else {
    console.log("Неправильно");
    document.getElementById("numOne2").innerHTML = "Неправильно";
  }
}
