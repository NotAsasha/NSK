import Square from "../Other/backgroundSquare/Square"
import React from "react";
import Button from 'react-bootstrap/Button'
// eslint-disable-next-line
import { BrowserRouter as Route } from "react-router-dom";
// eslint-disable-next-line
import Good from "./good";
import "./math.css";

let numbersOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// eslint-disable-next-line

let numberOne = numbersOne[Math.floor(Math.random() * 12)];
let numberTwo = numbersTwo[Math.floor(Math.random() * 12)];
// eslint-disable-next-line
function reandom() {
  let randomTask = numberOne + "+" + numberTwo;
  console.log(randomTask);
  return randomTask;
}

let resultat = numberOne + numberTwo;

export default function Addition() {
  return (
    <div className= "Ekran">
    <div className="nocss">
      <div className="primer">
        <h1 id="numOneq">{numberOne}</h1>
        <h1 id="plus">+</h1>
        <Square />
        <h1 id="numTwo">{numberTwo}</h1>
      </div>
      {/* eslint-disable-next-line */}
      <h1 id="numOne"></h1>
      <a href="/NSK/addition">
        <button>Нова задача!</button>
      </a>

      <input
        id="elem1"
        required
        type="number"
        name="quantity"
        placeholder="Відповідь"
      />
      <Button id="butt" type="button" onClick={resultTester} value="Готово">Перевірити</Button>
    </div>
    </div>
  );
}

function resultTester() {
  let val = document.getElementById("elem1").value;
  let vall = parseInt(val, 10);
  console.log(vall);
  if (resultat === vall) {
    console.log("Правильно");
    document.getElementById("numOne").innerHTML = "Правильно";
  } else {
    console.log("Неправильно");
    document.getElementById("numOne").innerHTML = "Неправильно";
  }
}
