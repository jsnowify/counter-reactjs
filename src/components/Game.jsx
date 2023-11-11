import { useState } from "react";

function Game() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="m-auto flex  flex-col justify-center items-center min-h-screen bg-[#99B080] text-white">
      <h1 className="text-9xl">{counter}</h1>

      <div className=" flex space-x-9 pt-5 ">
        <button
          className="w-32 h-10 bg-[#748E63] rounded-full shadow-lg hover:shadow-[#445D48] duration-200 ease-out md:ease-in"
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
        <button
          className="w-32 h-10 bg-[#748E63] rounded-full shadow-lg hover:shadow-[#445D48] duration-200 ease-out md:ease-in"
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
        <button
          className="w-32 h-10 bg-[#748E63] rounded-full shadow-lg hover:shadow-[#445D48] duration-200 ease-out md:ease-in"
          onClick={() => setCounter(counter ? counter - 1 : 0)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
export default Game;
