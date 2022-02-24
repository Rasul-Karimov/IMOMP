import React from "react";
import "./bests.css";
import { useEffect } from "react";
import Best from "./best/Best";
const Bests = () => {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bests">
      <div className="container">
        <div className="bests__title">Лучшие студенты</div>
        <div className="bests__items-block">
          <div className="container">
            <div className="bests__items">
              <Best
                img="student1.jpg"
                name="Канымкулов Нурмухаммат Канымкулович"
                position="Заместитель директора"
                info="выпускник направления: Ислаское право 2016 года, Консул кыргызской Республики в Государстве Кувейт"
              />
              <Best
                img="student2.jpg"
                name="Канымкулов Нурмухаммат Канымкулович"
                position="Заместитель директора"
                info="выпускник направления: Ислаское право 2016 года, Консул кыргызской Республики в Государстве Кувейт"
              />
              <Best
                img="student3.jpg"
                name="Канымкулов Нурмухаммат Канымкулович"
                position="Заместитель директора"
                info="выпускник направления: Ислаское право 2016 года, Консул кыргызской Республики в Государстве Кувейт"
              />
              <Best
                img="student4.jpg"
                name="Канымкулов Нурмухаммат Канымкулович"
                position="Заместитель директора"
                info="выпускник направления: Ислаское право 2016 года, Консул кыргызской Республики в Государстве Кувейт"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frame">
        <div className="items">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
};

export default Bests;
