import React from "react";
import "./divider.css";

export default function Divider({ footer }) {
  return <hr className={`divider ${footer ? "divider--footer" : ""}`} />;
}
