import React from "react";
import "./about.css";

export default function About() {
  return (
    <section className="about">
      <div className="about__phone">
        <img className="about__phone__image" src="/Phone.png" alt="watch" />
      </div>
      <div className="about__info">
        <h5 className="about__info_title">
          Are you planning to update Startup? We are! Here is the changelog of
          changes we’ve made after the release. Thanks our clients who helped us
          to improve our product.
        </h5>
        <div className="about__info__feature">
          <div className="about__info__feature__single">
            <article className="about__info__feature__single__article">
              Retina Ready
            </article>
            <p className="about__info__feature__single__paragraph">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
          <div className="about__info__feature__single">
            <article className="about__info__feature__single__article">
              Responsive Layout
            </article>
            <p className="about__info__feature__single__paragraph">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
          <div className="about__info__feature__single">
            <article className="about__info__feature__single__article">
              Full Control
            </article>
            <p className="about__info__feature__single__paragraph">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
