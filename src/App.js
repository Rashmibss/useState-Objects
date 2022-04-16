import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // Object initialization
  const [buyColors, setBuyColors] = useState({ paints: 10, crayons: 1 });

  // Destrucuring
  const { paints, crayons } = buyColors;

  // Incrementing the value based on which button was clicked
  const buyMore = (val) =>
    setBuyColors({
      // A spread operator to keep the existing values and update the following below
      ...buyColors,
      [val]: buyColors[val] + 1
    });

  // Decrementing the value based on which button was clicked
  const buyLess = (val) => {
    // Creating temp variable to update the hook
    let tempBuyObj = { ...buyColors };
    tempBuyObj[val] = tempBuyObj[val] - 1;
    setBuyColors(tempBuyObj);
  };

  return (
    <div className="app">
      <h1>Hello there!!</h1>
      <h2>
        Let's see how to update object <br />
        values with useState
      </h2>

      <div>
        <button className="decrease-button" onClick={() => buyLess("paints")}>
          -
        </button>
        <p>I have {paints} &nbsp;paints</p>
        <button onClick={buyMore.bind(null, "paints")}>+</button>
      </div>

      <div>
        <button className="decrease-button" onClick={() => buyLess("crayons")}>
          -
        </button>
        <p>I have {crayons} crayons</p>
        <button onClick={buyMore.bind(null, "crayons")}>+</button>
      </div>
    </div>
  );
}
