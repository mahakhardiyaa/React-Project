import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [value, setValue] = useState(0);

  const incrementValue = () => {
    setValue(newValue => newValue + 1);
  };

  const decrementValue = () => {
    setValue(newValue => newValue - 1);
  };

  return (
    <div>
      <Child
        currentValue={value}
        onIncrement={incrementValue}
        onDecrement={decrementValue}
      />
    </div>
  );
};

export default Parent;
