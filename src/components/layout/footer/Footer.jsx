import React from "react";
import Option from "../../common/Option";
import "./footer.css";
import LinkLogo from "./LinkLogo";
import Divider from "../../common/Divider";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__options">
        <Option text="Home" />
        <Option text="Feature" />
        <Option text="Pricing" />
        <Option text="Blog" />
      </div>
      <Divider footer />
      <div className="footer__info">
        <h5 className="footer__info__title">Lorem ipsum</h5>
        <p className="footer__info__paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <p className="footer__info__paragraph footer__info__paragraph--small">
          Privacy Policy
        </p>
        <p className="footer__info__paragraph footer__info__paragraph--small">
          Terms
        </p>
        <div className="footer__info__social">
          <LinkLogo fontAwesome="fa-brands fa-twitter" />
          <LinkLogo fontAwesome="fa-brands fa-facebook-f" />
          <LinkLogo fontAwesome="fa-brands fa-google-plus-g" />
        </div>
      </div>
    </footer>
  );
}
