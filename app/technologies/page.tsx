import React from "react";
import TopPageComponent from "../components/TopPageComponent/TopPageComponent";
import Contact from "../components/Contact/Contact";
import { technologiesCard } from "../data/data";
import { TechnologiesCardT } from "../data/data.d";
import TechonlogiesCard from "../components/Cards/TechonlogiesCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "We specialize in helping you build a team of expert developers.",
};
const Technologies = () => {
  const renderCard = technologiesCard.map((el: TechnologiesCardT) => {
    return <TechonlogiesCard key={el?.id} {...el} />;
  });
  return (
    <div>
      <TopPageComponent
        title="Technologies"
        content="We specialize in helping you build a team of expert developers."
      />
      <section className="pagesPadding py-16 sm:px-5 xs:px-5">
        <h2 className="h2">Technologies</h2>
        <p className="p2 lg:w-[700px] text-start uppercase">
          Using the right technology for the right problem is our mantra. We are
          agile about learning new processes and tools to save time and reduce
          complexity
        </p>
      </section>

      <section className="pagesPadding grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-5 mb-8 lg:justify-between md:justify-between  sm:justify-items-center xs:justify-items-center">
        {renderCard}
      </section>

      <Contact />
    </div>
  );
};

export default Technologies;
