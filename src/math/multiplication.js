import React from "react";
import Button from 'react-bootstrap/Button'
import Square from "../Other/backgroundSquare/Square"
// eslint-disable-next-line
import { BrowserRouter as Route } from "react-router-dom";
// eslint-disable-next-line
import Good from "./good";
import "./math.css";

let numbersOne1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let numbersTwo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// eslint-disable-next-line

let numberOne1 = numbersOne1[Math.floor(Math.random() * 12)];
let numberTwo1 = numbersTwo1[Math.floor(Math.random() * 12)];
// eslint-disable-next-line
function reandom1() {
  let randomTask1 = numberOne1 + "*" + numberTwo1;
  console.log(randomTask1);
  return randomTask1;
}

let resultat1 = numberOne1 * numberTwo1;

export default function Multiplication() {
  return (
    <div className= "Ekran">
    <div className="nocss">
      <div className="primer">
        <h1 id="numOneq1">{numberOne1}</h1>
        <h1 id="plus1">*</h1>
        <Square />
        <h1 id="numTwo1">{numberTwo1}</h1>
      </div>
      {/* eslint-disable-next-line */}
      <h1 id="numOne1"></h1>
      <a href="/NSK/multiplication">
        <button>Нова задача!</button>
      </a>

      <input
        id="elem11"
        required
        type="number"
        name="quantity"
        placeholder="Відповідь"
      />
      <Button id="butt" type="button" onClick={resultTester1} value="Готово">Перевірити</Button>
    </div>
    </div>
  );
}

function resultTester1() {
  let val1 = document.getElementById("elem11").value;
  let vall1 = parseInt(val1, 10);
  console.log(vall1);
  if (resultat1 === vall1) {
    console.log("Правильно");
    document.getElementById("numOne1").innerHTML = "Правильно";
  } else {
    console.log("Неправильно");
    document.getElementById("numOne1").innerHTML = "Неправильно";
  }
}
