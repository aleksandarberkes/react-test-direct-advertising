import React from "react";
import "./option.css";

export default function Option({ text, active, footer }) {
  return (
    <div className={`option ${active ? "option--active" : ""}`}>
      <span
        className={`option__text--${footer ? "footer" : "header"}`}
        href="#"
      >
        {text}
      </span>
    </div>
  );
}
