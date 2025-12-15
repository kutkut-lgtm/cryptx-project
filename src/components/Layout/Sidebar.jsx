import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  LineChart,
  Receipt,
  Wallet2,
  Mail,
  Settings,
  LogOut,
} from "lucide-react";
import logoMark from "../../assets/cryptx-logo.png";

const navItems = [
  { label: "Overview", icon: LayoutGrid, to: "/" },
  { label: "Chart", icon: LineChart, to: "/chart" },
  { label: "Transactions", icon: Receipt, to: "/transactions" },
  { label: "Wallet", icon: Wallet2, to: "/wallet" },
  { label: "Mail Box", icon: Mail, to: "/mailbox" },
  { label: "Setting", icon: Settings, to: "/settings" },
  { label: "Setting", icon: Settings, to: "/settings" },
];
const Sidebar = () => (
  <aside className="h-full w-[263px] flex-shrink-0 flex-col rounded-l-[20px] bg-background-muted px-10 py-10 flex">
    <div className="flex items-center gap-3">
      <img src={logoMark} alt="CryptX" className="h-10" />
      <span className="text-[21px] font-semibold text-heading">CryptX</span>
    </div>

    <nav className="mt-16 flex flex-1 flex-col gap-8">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-4 text-[15px] font-medium transition-colors ${
                isActive ? "text-primary" : "text-muted hover:text-primary"
              }`
            }
          >
            <Icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        );
      })}
    </nav>

    <button
      type="button"
      className="mt-auto flex items-center justify-between text-[14px] font-medium text-muted transition-colors hover:text-primary"
    >
      <span className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-[12px] text-muted">
          <LogOut aria-hidden className="h-5 w-5" />
        </span>
        Logout
      </span>
    </button>
  </aside>
);

export default Sidebar;
