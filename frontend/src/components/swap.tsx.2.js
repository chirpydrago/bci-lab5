<div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-gray-800 text-4xl">
            <div>
              <button className="px-2 py-2">CTK</button>
            </div>
          </div>          
          <div className="text-gray-800 text-3xl">
             to </div>
          <div className="text-gray-800 text-4xl">{tokenBSymbol}</div>
          <div className="flex justify-center">
            <span className="flex-item text-gray-800 text-2xl">Amount:</span>
            <input
              type="text"
              name="Amount"
              id="amount"
              className="mx-2 flex-item shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block  border-gray-300 rounded-md text-gray-800 text-2xl w-1/6 text-center"
              placeholder="10"
              inputMode="decimal"
              onChange={handleAmountChange}
            />
          </div>
          <div></div>
          <div className="flex justify-center">
            <span className="flex-item text-gray-800 text-2xl">Receive:</span>
            <input
              type="text"
              name="Receive"
              id="receive"
              disabled
              className="mx-2 flex-item shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block  border-gray-300 rounded-md text-gray-800 text-2xl w-1/6 text-center"
              placeholder="20"
              value={exchangeAmount}
            />
          </div>
          <div></div>
          <div></div>
          <button
            type="submit"
            className="mt-3 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={handleSwap}
          >
            Swap!
          </button>
        </div>
      </div>
    </div>