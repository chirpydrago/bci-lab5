import React, { useContext, useEffect, useState } from "react";
import { ERC20Context , UniswapV2Router02Context , CurrentAddressContext } from "../hardhat/SymfoniContext";
import { ERC20 } from "../hardhat/typechain/ERC20";
import ethers from "ethers";
import AppBody from "../AppBody";
import App from "../App";
import { inputOutputComparator } from "@sushiswap/sdk";

interface Props {
    tokenA: string;
    tokenB: string;
}

export const Swap: React.FC<Props> = ({tokenA, tokenB}) => {

  const ERC20Factory = useContext(ERC20Context);

  // const [tokenAInstance, setTokenAInstance] = useState<ERC20>();
  // const [tokenBInstance, setTokenBInstance] = useState<ERC20>();
  const [inputInstance, setInputInstance] = useState<ERC20>();
  const [outputInstance, setOutputInstance] = useState<ERC20>();

  // const [tokenASymbol, setTokenASymbol] = useState<string>();  
  // const [tokenBSymbol, setTokenBSymbol] = useState<string>();
  const [inputSymbol, setInputSymbol] = useState<string>();
  const [outputSymbol, setOutputSymbol] = useState<string>();  

  const [exchangepair, setExchangepair] = useState({input: tokenA, output: tokenB});  // 0 - CTK->MTK, 1 - MTK->CTK;
  
  useEffect(() => {
    if (ERC20Factory.instance) {
      setInputInstance(ERC20Factory.instance!.attach(exchangepair.input));
      setOutputInstance(ERC20Factory.instance!.attach(exchangepair.output));
    }
  },[ERC20Factory.instance, tokenA, tokenB, exchangepair]);

  useEffect(()=> {
    const fetchTokenSymbols = async () => {
      if (!inputInstance || !outputInstance) return;

      setInputSymbol(await inputInstance.symbol());
      setOutputSymbol(await outputInstance.symbol());
    };
    fetchTokenSymbols();
  }, [inputInstance , outputInstance, exchangepair]);

 
  const [amount, setAmount] = useState<number>(0);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value));
  };

  const swapExchangepair =  () => {    
    if (exchangepair.input===tokenA) {      
      setExchangepair({input: tokenB, output: tokenA});
      console.log("After Swap: ", exchangepair);
      console.log(inputSymbol,outputSymbol)
    } else {      
      setExchangepair({input: tokenA, output: tokenB})
      console.log("After Swap: ", exchangepair);
      console.log(inputSymbol,outputSymbol)
    }    
  }

  const router = useContext(UniswapV2Router02Context);
  const [exchangeAmount, setExchangeAmount] = useState<string>("0");

  useEffect(() => {
    const fetchExchangeAmount = async () => {
      if (!router.instance) {
        console.log("router instance not found");
        return;
      }

      if (amount > 0) {
        // router gets angry if you pass in a 0
        const amountsOut = await router.instance.getAmountsOut(
          ethers.utils.parseEther(amount.toString()),
          [exchangepair.input, exchangepair.output]
        );
        setExchangeAmount(ethers.utils.formatUnits(amountsOut[1].toString(), 18));
      }
    };

    fetchExchangeAmount();
  }, [router.instance, amount, tokenA, tokenB]);

  const [currentAddress, setCurrentAddress] = useContext(CurrentAddressContext);

  const handleSwap = async () => {
    if (!router.instance || !inputInstance) {
      console.log("router or token instance not found");
      return;
    }
    const time = Math.floor(Date.now() / 1000) + 3600;
    
    await (await inputInstance.approve(router.instance.address, ethers.utils.parseEther(amount.toString()))).wait();
    await (await router.instance.swapExactTokensForTokens(
      ethers.utils.parseEther(amount.toString()),
      0, // we shouldn't leave this as 0, it is dangerous in real trading
      [exchangepair.input, exchangepair.output],
      currentAddress,
      time
    )).wait();
  };



  return (

    <div className="flex flex-col flex-nowrap relative px-2 py-2">
      <div className="rounded-2xl bg-gray-100 border-2 flex flex-row flex-nowrap items-center pt-3 pr-4 pb-3 pl-4 ">
        {/* <div className="flex flex-row flex-nowrap items-center pt-4 pr-4 pb-3 pl-4">           */}
          <label htmlFor="input.amount">{inputSymbol}</label>
          <input
              type="text"
              name="Amount"
              id="input.amount"
              className=" flex-grow mx-2 flex-item bg-gray-100 rounded-md text-gray-800 text-xl text-right"
              placeholder="10"
              inputMode="decimal"
              onChange={handleAmountChange}
            />                        
        {/* </div> */}
      </div>
      <div className="h-6">
        <button type="submit" className=" rounded-3xl bg-gray-200 border-2" onClick={swapExchangepair}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
</svg>
        </button>
      </div>
      <div className="rounded-2xl bg-gray-100 border-2 flex flex-row flex-nowrap items-center pt-4 pr-4 pb-3 pl-4">        
          <label htmlFor="output.amount">{outputSymbol}</label>
          <input
              type="text"
              name="Amount"
              id="output.amount"
              className="flex-grow mx-2 flex-item shadow-sm bg-gray-100 rounded-md text-gray-800 text-xl w-9/10 text-right"              
              disabled
              inputMode="decimal"
              value={exchangeAmount}
            />
      </div>
      <div className="h-4
      "></div>      
      <button type="submit" onClick={handleSwap}
              className=" h-12 w-full font-bold bg-pink-200 rounded-2xl hover:bg-pink-300">
                Swap

      </button>
      
    </div>

    




  );
};