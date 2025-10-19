import React from "react";
import "./cta.css";
import TextInput from "../../common/TextInput";
import SignUpButton from "../../common/SignUp";

export default function Cta() {
  return (
    <section className="cta">
      <h3 className="cta__title">Sign up right now and get 30% off.</h3>
      <div className="cta__input">
        <TextInput placeholder={"Your email"} type={"text"} />
        <TextInput placeholder={"Your password"} type={"password"} />
        <SignUpButton text={"Sign Up"} />
      </div>
      <p className="cta__paragraph">
        By signing up, you agree to the Terms of Service.
      </p>
    </section>
  );
}
