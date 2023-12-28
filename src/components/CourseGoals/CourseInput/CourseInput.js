import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length > 0) {
      props.onAddGoal(enteredValue);
      setEnteredValue("");
    } else {
      setIsValid(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ backgroundColor: !isValid ? "red" : "" }}>
          Course Goal
        </label>
        <input
          style={{ borderColor: !isValid ? "red" : "" }}
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit" value={enteredValue} isValid={isValid}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;