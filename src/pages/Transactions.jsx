import React from "react";
import TransactionTable from "../components/UI/TransactionTable";
import { transactionData } from "../data/TransactionData";

export default function Transactions() {
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-content p-6">
        <h2 className="text-xl font-semibold mb-4">Transactions</h2>
        <div className="bg-surface rounded-[12px] p-4">
          <TransactionTable rows={transactionData} />
        </div>
      </div>
    </main>
  );
}
