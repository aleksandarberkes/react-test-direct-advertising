import React from "react";
import "./partners.css";
import PartnerComponent from "./PartnerComponent";

export default function Partners() {
  return (
    <section className="partners">
      <div className="partners__title--container">
        <h3 className="partners__title">
          Trusted by over 500 great businesses
        </h3>
        <article className="partners__article">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </article>
      </div>
      <div className="partners__logo--container">
        <div className="partners__logo--row">
          <PartnerComponent src="/starbucks.png" />
          <PartnerComponent src="/pepsi.png" />
          <PartnerComponent src="/walmart.png" />
          <PartnerComponent src="/azendoo.png" />
        </div>
        <div className="partners__logo--row">
          <PartnerComponent src="/cnn.png" />
          <PartnerComponent src="/philips.png" />
          <PartnerComponent src="/pizza.png" />
          <PartnerComponent src="/bean.png" />
        </div>
      </div>
    </section>
  );
}
