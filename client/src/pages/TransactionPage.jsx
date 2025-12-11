import React, { useState } from "react";
import {
  Search,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownLeft,
  RefreshCcw,
} from "lucide-react";

// Mock Data
const TRANSACTIONS = [
  {
    id: "TXN-8821",
    date: "Dec 10, 2025",
    desc: "Exchange USD to SLSH",
    type: "Exchange",
    amount: "- $100.00",
    status: "Completed",
    currency: "USD",
  },
  {
    id: "TXN-8820",
    date: "Dec 09, 2025",
    desc: "Deposit via EVC Plus",
    type: "Deposit",
    amount: "+ 4,000,000 Sh",
    status: "Completed",
    currency: "SLSH",
  },
  {
    id: "TXN-8819",
    date: "Dec 08, 2025",
    desc: "Transfer to Ahmed Ali",
    type: "Transfer",
    amount: "- $150.00",
    status: "Pending",
    currency: "USD",
  },
  {
    id: "TXN-8818",
    date: "Dec 08, 2025",
    desc: "Loan Disbursement",
    type: "Loan",
    amount: "+ $500.00",
    status: "Completed",
    currency: "USD",
  },
  {
    id: "TXN-8817",
    date: "Dec 05, 2025",
    desc: "Withdrawal at Branch",
    type: "Withdrawal",
    amount: "- 200,000 Sh",
    status: "Failed",
    currency: "SLSH",
  },
];

export default function TransactionsPage() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="max-w-6xl mx-auto">
      {/* 1. HEADER & ACTIONS */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-primary uppercase tracking-widest">
            Transactions
          </h1>
          <p className="text-primary font-medium opacity-80 mt-1">
            History of your deposits, transfers, and exchanges.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white text-primary px-4 py-2 rounded shadow font-bold flex items-center gap-2 hover:bg-gray-50">
            <Download className="h-4 w-4" /> Export CSV
          </button>
        </div>
      </div>

      {/* 2. FILTER BAR (White Card Style) */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by ID or Name..."
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-trust-light text-trust-DEFAULT font-medium"
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <select
            className="px-4 py-3 bg-gray-50 border border-gray-200 rounded font-bold text-trust-DEFAULT outline-none cursor-pointer"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Deposit">Deposits</option>
            <option value="Transfer">Transfers</option>
            <option value="Exchange">Exchanges</option>
          </select>
          <select className="px-4 py-3 bg-gray-50 border border-gray-200 rounded font-bold text-trust-DEFAULT outline-none cursor-pointer">
            <option>All Currencies</option>
            <option>USD ($)</option>
            <option>SLSH (Sh)</option>
          </select>
        </div>
      </div>

      {/* 3. TRANSACTION TABLE */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-white uppercase text-sm tracking-wider">
                <th className="p-5 font-bold">Transaction ID</th>
                <th className="p-5 font-bold">Description</th>
                <th className="p-5 font-bold">Date</th>
                <th className="p-5 font-bold">Status</th>
                <th className="p-5 font-bold text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {TRANSACTIONS.map((tx) => (
                <tr
                  key={tx.id}
                  className="hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  <td className="p-5 font-bold text-trust-light">{tx.id}</td>
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      {/* Icon Logic */}
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center 
                        ${
                          tx.type === "Deposit"
                            ? "bg-green-100 text-green-600"
                            : tx.type === "Exchange"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        {tx.type === "Exchange" ? (
                          <RefreshCcw className="h-4 w-4" />
                        ) : tx.type === "Deposit" ? (
                          <ArrowDownLeft className="h-4 w-4" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4" />
                        )}
                      </div>
                      <span className="font-bold text-gray-700">{tx.desc}</span>
                    </div>
                  </td>
                  <td className="p-5 font-medium text-gray-500 text-sm">
                    {tx.date}
                  </td>
                  <td className="p-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase
                      ${
                        tx.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : tx.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td
                    className={`p-5 text-right font-extrabold text-lg
                    ${
                      tx.amount.includes("+")
                        ? "text-green-600"
                        : "text-primary"
                    }`}
                  >
                    {tx.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Mockup */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-500">
            Showing 1-5 of 128
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-gray-300 rounded text-sm font-bold text-gray-600 hover:bg-gray-100">
              Prev
            </button>
            <button className="px-3 py-1 bg-primary text-white rounded text-sm font-bold hover:bg-trust-light">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
