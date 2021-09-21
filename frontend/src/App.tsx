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
              tokenA="0xe4Cb3981f2b376a45A643f859736e9F70Dd5530e"
              tokenB="0xA819B7d51AFE640Fd3FE2bB190C7fe53EBD83857"
            ></Swap>
          </div>
        </div>
        
      </Symfoni>
      </div>
  );
}

export default App;
