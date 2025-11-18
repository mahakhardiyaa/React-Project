const Child = ({ currentValue, onIncrement, onDecrement }) => {

  return (
    <>
      {currentValue >= 0 ? (
        <div>
          <h1>Adding and Substracting the {currentValue} values</h1>
          <button onClick={onIncrement}> Increment </button>
          <button onClick={onDecrement}> Decrement </button>
        </div>
      ) : (
        <div>
          <h1>Value reached 0</h1>
          <button onClick={onIncrement}> Increment </button>
          <button disabled="true" onClick={onDecrement}> Decrement </button>
        </div>
      )}
    </>
  );
};

export default Child;
