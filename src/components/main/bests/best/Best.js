import React from "react";
import "./best.css";
const Best = (props) => {
  return (
    <>
      <div className="best">
        <div class="best__content">
          <div class="best__position">{props.position}</div>
          <div class="best__name">{props.name}</div>
          <div class="best__info">{props.info}</div>
        </div>
        <div class="best__img">
          <img src={`images/students/${props.img}`} alt="" />
        </div>
      </div>
    </>
  );
};

export default Best;
