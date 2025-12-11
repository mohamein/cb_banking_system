import React, { useState } from "react";

export default function ExchangePage() {
  // State for the inputs
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");

  // Existing state for calculation
  const [usdAmount, setUsdAmount] = useState(0);
  const [rate, setRate] = useState(10830);
  const slshAmount = usdAmount * rate;

  return (
    <div className="max-w-6xl mx-auto pt-6">
      {/* 1. TITLE */}
      <h2 className="text-2xl font-bold text-primary text-center mb-8 uppercase tracking-widest">
        SARIF / EXCHANGE
      </h2>

      {/* 2. FROM / TO ROW (Updated to Inputs) */}
      <div className="flex justify-between items-center mb-10 gap-20">
        {/* From Box */}
        <div className="flex-1 bg-white p-2 pl-4 flex items-center shadow-sm">
          <span className="font-bold text-primary w-20 cursor-default">
            From:
          </span>
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            className="font-medium italic text-gray-800 w-full outline-none border-none bg-transparent placeholder-gray-400"
            placeholder="Enter sender name"
          />
        </div>

        {/* To Box */}
        <div className="flex-1 bg-white p-2 pl-4 flex items-center shadow-sm">
          <span className="font-bold text-primary w-20 cursor-default">
            To:
          </span>
          <input
            type="text"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            className="font-medium italic text-gray-800 w-full outline-none border-none bg-transparent placeholder-gray-400"
            placeholder="Enter receiver name"
          />
        </div>
      </div>

      {/* 3. INPUTS ROW (Dollar | Rate | Shilling) */}
      <div className="flex justify-between items-end mb-12 gap-8">
        {/* Dollar Input */}
        <div className="flex-1 text-center">
          <label className="block text-primary font-bold text-xl mb-2 italic">
            Dollar
          </label>
          <div className="bg-white p-3 flex items-center justify-center shadow-md">
            <span className="font-bold text-xl mr-2">$</span>
            <input
              type="number"
              value={usdAmount}
              onChange={(e) => setUsdAmount(e.target.value)}
              className="w-full text-center font-bold text-xl outline-none"
            />
          </div>
        </div>

        {/* Rate Input */}
        <div className="flex-1 text-center">
          <label className="block text-primary font-bold text-xl mb-2 italic">
            Rate:
          </label>
          <div className="bg-white p-3 flex items-center justify-center shadow-md">
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full text-center font-bold text-xl outline-none"
            />
          </div>
        </div>

        {/* Shilling Output */}
        <div className="flex-1 text-center">
          <label className="block text-primary font-bold text-xl mb-2 italic">
            S/Shiling
          </label>
          <div className="bg-white p-3 flex items-center justify-center shadow-md">
            <span className="font-bold text-xl mr-2">SLSH</span>
            <input
              type="text"
              readOnly
              value={slshAmount.toLocaleString()}
              className="w-full text-center font-bold text-xl outline-none bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* 4. CONFIRM BUTTON */}
      <div className="flex justify-center mb-12">
        <button className="bg-primary text-white font-semibold py-3 px-12 shadow-lg hover:bg-primary/70 transition-colors uppercase">
          Confirm
        </button>
      </div>

      {/* 5. EXCHANGE DETAILS FORM */}
      <div className="bg-white rounded-[30px] p-8 min-h-[300px] shadow-xl relative">
        <div className="absolute top-8 left-8 right-8 h-6 bg-[#A8D5BA] opacity-50 rounded-full"></div>
        <div className="flex items-center justify-center h-full pt-12">
          <div className="text-center">
            <h3 className="text-xl font-medium text-black">Exchange Details</h3>
            <h2 className="text-2xl font-bold text-black mt-1">FORM</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
