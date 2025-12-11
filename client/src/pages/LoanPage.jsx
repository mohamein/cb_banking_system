import React, { useState } from "react";
import { CreditCard, Calendar, CheckCircle, AlertCircle } from "lucide-react";

export default function LoansPage() {
  const [loanAmount, setLoanAmount] = useState(500);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-primary uppercase tracking-widest mb-8">
        Loan Management
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN: ACTIVE LOAN STATUS */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-primary">Active Loan</h2>

          {/* Active Loan Card */}
          <div className="bg-primary text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute -right-10 -top-10 h-40 w-40 bg-white opacity-10 rounded-full"></div>

            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-trust-bg font-bold text-sm uppercase opacity-80">
                  Remaining Balance
                </p>
                <h3 className="text-5xl font-extrabold mt-2">$250.00</h3>
              </div>
              <div className="bg-white/20 p-2 rounded-lg">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-full bg-trust-light/30 rounded-full h-3">
                <div
                  className="bg-brand-yellow h-3 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span>Paid: $250</span>
                <span>Total: $500</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-brand-yellow" />
                <span className="font-bold text-sm">Next Payment: Dec 25</span>
              </div>
              <button className="bg-white text-primary font-bold px-6 py-2 rounded shadow hover:bg-gray-100 transition-colors">
                Repay Now
              </button>
            </div>
          </div>

          {/* Past Payments List */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-trust-DEFAULT mb-4">
              Repayment History
            </h3>
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-bold text-gray-700 text-sm">
                        Installment #{i}
                      </p>
                      <p className="text-xs text-gray-500">
                        Nov {i * 10}, 2025
                      </p>
                    </div>
                  </div>
                  <span className="font-bold text-primary">$125.00</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: REQUEST NEW LOAN */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-trust-DEFAULT">
            Request New Loan
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="mb-6 bg-blue-50 border-l-4 border-primary p-4 flex gap-3">
              <AlertCircle className="h-6 w-6 text-primary shrink-0" />
              <p className="text-sm text-gray-600 font-medium">
                You are eligible for a maximum loan of{" "}
                <span className="font-bold text-primary">$1,000</span> based on
                your transaction history.
              </p>
            </div>

            {/* Amount Slider / Input */}
            <div className="mb-8">
              <label className="block text-primary font-bold text-lg mb-2">
                Loan Amount ($)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full text-3xl font-extrabold text-primary border-b-2 border-gray-200 focus:border-primary outline-none py-2"
                />
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                step="50"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full mt-4 accent-primary cursor-pointer"
              />
            </div>

            {/* Duration Selector */}
            <div className="mb-8">
              <label className="block text-primary font-bold text-lg mb-4">
                Repayment Duration
              </label>
              <div className="grid grid-cols-3 gap-4">
                {["1 Month", "3 Months", "6 Months"].map((dur) => (
                  <button
                    key={dur}
                    className="border-2 border-gray-200 text-gray-500 font-bold py-3 rounded-lg hover:border-primary hover:text-primary focus:border-primary focus:text-primary transition-all"
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-2 mb-8">
              <div className="flex justify-between text-sm font-bold text-gray-500">
                <span>Principal</span>
                <span>${loanAmount}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-gray-500">
                <span>Service Fee (5%)</span>
                <span>${(loanAmount * 0.05).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between text-lg font-extrabold text-primary">
                <span>Total Repayment</span>
                <span>${(loanAmount * 1.05).toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-primary text-white font-extrabold text-xl py-4 rounded shadow-lg hover:bg-trust-light transition-colors uppercase">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
