import React from "react";

export default function PartnerComponent({ src }) {
  return (
    <div className="partners__logo--component">
      <img src={src} alt="logo" className="partners__logo--image" />
    </div>
  );
}
