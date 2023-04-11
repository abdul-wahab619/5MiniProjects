import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "+") {
    state = state + 1;
  }

  if (state > 0 && action.type === "-") {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  // const initialData = 15;
  //   const [myNum, setMyNum] = React.useState(0);
  const initialData = 0;
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="center_div">
        <p>INC & DEC</p>
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({ type: "+" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h1>+</h1>
        </div>
        <div class="button2" onClick={() => dispatch({ type: "-" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h1>-</h1>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
