import React from "react";
import "./student.css";
const Student = (props) => {
  return (
    <div className="student">
      <div class="student__img">
        <img src={`images/students/${props.img}`} alt="" />
      </div>
      <div class="student__position">{props.position}</div>
      <div class="student__name">{props.name}</div>
    </div>
  );
};

export default Student;
