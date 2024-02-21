import { WidgetProcessT } from "../../data/data.d";
import { widgetProcessData } from "@/app/data/data";
import React from "react";
import Widget from "./Widget";

type Props = {};

const ProcessSection = (props: Props) => {
  const renderWidgets = widgetProcessData.map((el: WidgetProcessT) => {
    return <Widget key={el?.id} {...el} />;
  });
  return (
    <section className="h-auto w-full bg-linear-yellow flex items-center justify-center flex-col gap-3 py-6">
      <h4 className="text-white text-[22px] font-semibold">How To Start</h4>
      <h2 className="h2">Easy Process</h2>
      <p className="p2 lg:w-[435px] md:w-[435px] sm:w-[435px] xs:w-[250px] text-center uppercase">
        We specialize in helping you build a team of expert developers, testers,
        and leaders.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-col-2 sm:grid-cols-1 lg:justify-between md:justify-between sm:justify-center items-center pagesPadding w-full mt-4">
        {renderWidgets}
      </div>
    </section>
  );
};

export default ProcessSection;
