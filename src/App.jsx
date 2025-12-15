import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import Maincontent from "./components/Layout/Maincontent";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Chart from "./pages/Chart";
import Transactions from "./pages/Transactions";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-surface text-body">
      <div className="mx-auto max-w-[1280px] flex gap-6 p-6">
        <Sidebar />
        <div className="flex-1 flex flex-col gap-6">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/transactions" element={<Transactions />} />
            {/* add other routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
