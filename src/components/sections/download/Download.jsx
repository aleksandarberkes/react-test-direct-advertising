import React from "react";
import "./download.css";
import DownloadButton from "../../common/Download";

export default function Download() {
  return (
    <section className="download">
      <div className="download__info">
        <h2 className="download__info__title">The best Apple applications</h2>
        <h5 className="download__info__paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </h5>
        <DownloadButton text="Download from App Store" />
      </div>
      <img className="download__image" src="/Watch.png" alt="watch" />
    </section>
  );
}
