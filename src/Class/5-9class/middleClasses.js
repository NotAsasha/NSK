import React from 'react';
import "./middleClasses.css"

export default function MiddleClasses() {
    return (
      <div className="standart-div b">
        <div className="card b">
          <div className="h1-cont">
            <h1 className="oneand4">5-9</h1>
            <h1 className="klas">Клас</h1>

          </div>
          <div>
            <h3 className="what">
              -Обідні перерви <br /> -Вибір предметів <br /> -Дистанційні заняття
            </h3>
            <a className="go" href="/NSK/class/5-9">
              <h1 className="ffrg">
                Перейти
              </h1>
            </a>
          </div>
        </div>
      </div>
                );
};
