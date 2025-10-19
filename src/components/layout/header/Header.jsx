import { useState } from "react";
import Option from "../../common/Option";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div>
        <img className="header__logo" src="/Logo.png" alt="Logo" />
      </div>

      <button
        className={`header__hamburger`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fa-solid fa-bars header__hamburger__icon"></i>
      </button>

      <nav
        className={`header__options ${menuOpen ? "header__options--open" : ""}`}
      >
        <Option text="Home" active />
        <Option text="Feature" />
        <Option text="Pricing" />
        <Option text="Blog" />
      </nav>
    </header>
  );
}
