import React from "react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const directionStyles = {
  in: {
    label: "Incoming",
    textClass: "text-positive",
    badgeClass: "bg-positive/10",
    Icon: ArrowDownLeft,
  },
  out: {
    label: "Outgoing",
    textClass: "text-negative",
    badgeClass: "bg-negative/10",
    Icon: ArrowUpRight,
  },
};

export default function TransactionTable({ rows = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] divide-y">
        <thead>
          <tr className="text-sm text-muted">
            <th className="py-3 text-left">Date</th>
            <th className="py-3 text-left">Type</th>
            <th className="py-3 text-left">Asset</th>
            <th className="py-3 text-right">Amount</th>
            <th className="py-3 text-right">Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const direction =
              directionStyles[r.direction] ?? directionStyles.out;
            const { Icon, textClass, badgeClass, label } = direction;

            return (
              <tr key={r.id} className="odd:bg-white even:bg-surface">
                <td className="py-3 text-sm">{r.date}</td>
                <td className="py-3 text-sm">{r.type}</td>
                <td className="py-3 text-sm">{r.asset}</td>
                <td className="py-3 text-sm text-right">{r.amount}</td>
                <td className="py-3 text-sm text-right">{r.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
