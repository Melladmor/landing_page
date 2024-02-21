import React from "react";
import TopPageComponent from "../components/TopPageComponent/TopPageComponent";
import Card from "../components/Cards/Card";
import { servicesCard } from "../data/data";
import { CardsT } from "../data/data.d";
import Contact from "../components/Contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We specialize in helping you build a team of expert developers.",
};
const Services = () => {
  const renderCard = servicesCard.map((el: CardsT) => {
    return <Card type="column" key={el?.id} data={el} />;
  });
  return (
    <div>
      <TopPageComponent
        title="Our Services"
        content="We specialize in helping you build a team of expert developers."
      />
      <section className="pagesPadding py-16">
        <h2 className="h2">Hire Permanent and Remote Developers</h2>
        <p className="p2 w-[700px] text-start uppercase">
          From full-time remote engineering teams to hourly contractors, work
          with remote devs as needed
        </p>
      </section>

      <section className="pagesPadding grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-5 mb-8 lg:justify-between md:justify-between  sm:justify-items-center xs:justify-items-center">
        {renderCard}
      </section>

      <Contact />
    </div>
  );
};

export default Services;
