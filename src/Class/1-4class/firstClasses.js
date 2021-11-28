import React from "react";
import "./firstClasses.css";

export default function FirstClasses() {
  return (
    <div className="standart-div a">
      <div className="card a">
        <div className="h1-cont">
          <h1 className="oneand4">1-4</h1>
          <h1 className="klas">Клас</h1>
        </div>
        <div>
          <h3 className="what">
            -Дистанційні заняття <br /> -Вибір предметів <br /> -Обідні перерви
          </h3>
          <a className="go" href="/NSK/class/1-4">
            <h1 className= "aggsas">Перейти</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
