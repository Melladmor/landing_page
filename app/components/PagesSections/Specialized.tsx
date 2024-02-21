import React from "react";
import TechCard from "../Cards/TechCard";
import { techCardData } from "@/app/data/data";
import { CardsTech } from "../../data/data.d";

type Props = {};

const Specialized = (props: Props) => {
  const renderCard = techCardData.map((el: CardsTech) => {
    return <TechCard key={el?.id} {...el} />;
  });
  return (
    <section className="pagesPadding py-16 bg-primary_gray">
      <div className="xs:px-5">
        <h4 className=" text-[22px] font-semibold">Specialized</h4>
        <h2 className="h2 mb-10">Specialized Staff We Provide</h2>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 gap-5 justify-center">
        {renderCard}
      </div>
    </section>
  );
};

export default Specialized;
