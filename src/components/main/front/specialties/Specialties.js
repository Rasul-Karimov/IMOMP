import React from "react";
import "./specialties.css";
const Specialties = () => {
  return (
    <div className="specialties">
      <div className="container">
        <h3 className="specialties__title">Направление</h3>
        <div className="specialties__block">
          <div className="specialties__btn">
            <span className="icon-earth"></span>
            Бакалавриат
            <img src="images/icons/arrow.png" alt="" />
          </div>
          <div className="specialties__btn">
            <span className="icon-graduate"></span>
            Магистратура
            <img src="images/icons/arrow.png" alt="" />
          </div>
          <div className="specialties__btn-more"></div>
        </div>
      </div>
    </div>
  );
};

export default Specialties;
