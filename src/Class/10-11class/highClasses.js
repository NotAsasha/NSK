import React from "react";
import "./highClasses.css";

export default function HighClasses() {
  return (
    <div className="standart-div c">
      <div className="card c">
        <div className="h1-cont">
          <h1 className="oneand4">10-11</h1>
          <h1 className="klas">Клас</h1>
        </div>
        <div>
          <h3 className="what">
            -Вибір предметів <br /> -Дистанційні заняття <br /> -Обідні перерви
          </h3>
          <a className="go" href="/NSK/class/10-11">
            <h1>Перейти</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
