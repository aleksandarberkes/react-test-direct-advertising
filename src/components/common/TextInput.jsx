import React from "react";
import "./textInput.css";

export default function TextInput({ placeholder, type }) {
  return (
    <input className="cta_textInput" type={type} placeholder={placeholder} />
  );
}
