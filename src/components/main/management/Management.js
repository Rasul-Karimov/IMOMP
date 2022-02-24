import React from "react";
import "./management.css";
import { useEffect } from "react";
import Student from "./student/student";
const Management = () => {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="management">
        <div class="management__title">Студенческий совет</div>
        <div class="management__content">
          <div class="management__items">
            <Student
              img="student1.jpg"
              position="Председатель студенческого
совета:"
              name="Садырова Наристе"
            />
            <Student
              img="student2.jpg"
              position="Председатель студенческого
совета:"
              name="Садырова Наристе"
            />
            <Student
              img="student3.jpg"
              position="Председатель студенческого
совета:"
              name="Садырова Наристе"
            />
            <Student
              img="student4.jpg"
              position="Председатель студенческого
совета:"
              name="Садырова Наристе"
            />
            <Student
              img="student5.jpg"
              position="Председатель студенческого
совета:"
              name="Садырова Наристе"
            />
            <Student
              img="student6.jpg"
              position="Председатель студенческого
совета:"
              name="Садырова Наристе"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
