import React from "react";
import TopPageComponent from "../components/TopPageComponent/TopPageComponent";
import { howToStartCard } from "../data/data";
import { CardsT } from "../data/data.d";
import Card from "../components/Cards/Card";
import Contact from "../components/Contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Start",
  description: "We specialize in helping you build your business with team of expertise",
};
const Start = () => {
  const renderCard = howToStartCard.map((el: CardsT) => {
    return <Card type="row" key={el?.id} data={el} />;
  });
  return (
    <div>
      <TopPageComponent
        title="How To Start"
        content="We specialize in helping you build your business with team of expertise"
      />
      <section className="pagesPadding py-16">
        <h2 className="h2">How To Get Started With Us</h2>
        <p className="p2 w-[700px] text-start uppercase">
          From full-time remote engineering teams to hourly contractors, work
          with remote devs as needed
        </p>
      </section>

      <section className="pagesPadding flex flex-wrap lg:justify-between sm:justify-center xs:justify-center gap-5 mb-8">
        {renderCard}
      </section>

      <Contact />
    </div>
  );
};

export default Start;
