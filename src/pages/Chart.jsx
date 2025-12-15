import React from "react";
import ChartVisual from "../components/UI/ChartVisual";

const summary = {
  title: "BTC Price (7d)",
  currentValue: "R1,248,920.32",
  changeLabel: "+3.21%",
  changeDirection: "up",
  yAxisLabels: ["1.3M", "1.2M", "1.1M", "1.0M"],
};

const timeline = [
  { label: "Mon" },
  { label: "Tue" },
  { label: "Wed" },
  { label: "Thu" },
  { label: "Fri" },
  { label: "Sat" },
  { label: "Sun" },
];

export default function Chart() {
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-content p-6">
        <h2 className="text-xl font-semibold mb-4">Chart</h2>
        <div className="grid grid-cols-1 gap-6">
          <ChartVisual summary={summary} timeline={timeline} />
        </div>
      </div>
    </main>
  );
}
