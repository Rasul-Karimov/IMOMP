import React from "react";
import "./teacher.css";
const Teacher = (props) => {
  return (
    <div className="teacher">
      <div class="teacher__img">
        <img src={"images/teachers/" + props.img} alt="" />
      </div>
      <div class="teacher__info">
        <div class="teacher__position">{props.position}</div>
        <div class="teacher__name">{props.name}</div>
        <div class="teacher__awards">{props.awards}</div>
        <div class="teacher__email">{props.email}</div>
        <div class="teacher__phone">{props.phone}</div>
      </div>
    </div>
  );
};

export default Teacher;
