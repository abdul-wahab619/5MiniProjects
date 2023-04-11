import React from "react";
import "./style.css";

const UseState = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = React.useState(0);
  return (
    <>
      <div className="center_div">
        <p>INC & DEC</p>
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <h1>+</h1>
        </div>
        <div
          class="button2"
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}
        >
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

export default UseState;
