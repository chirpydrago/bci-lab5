import React from "react";
import "./App.css";
import { Symfoni } from "./hardhat/SymfoniContext";
import { Swap } from "./components/Swap";

function App() {
  return (
    <div className="App">
      <Symfoni autoInit={true}>
      <div className="min-h-screen bg-pink-300 py-32">
          <div className=" max-w-lg bg-gray-100 mx-auto pb-3 rounded-3xl sm:px-6 lg:px-8 ">
            <div className=" text-xl font-bold py-3">
              Swap Silly Swap
            </div>
            <Swap
              tokenA="0x42EbbB7E8741fa44beB19ef255Bd710F78e7E06D"
              tokenB="0xB211465560967D628B300Af5bb2fe7CD6B4b2194"
            ></Swap>
          </div>
        </div>
        
      </Symfoni>
      </div>
  );
}

export default App;
