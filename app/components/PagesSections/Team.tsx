import { CardsT } from "../../data/data.d";
import { teamCard } from "@/app/data/data";
import React from "react";
import Card from "../Cards/Card";

type Props = {};

const Team = (props: Props) => {
  const renderCards = teamCard.map((el: CardsT) => {
    return <Card key={el.id} type="column" data={el} />;
  });
  return (
    <div className="h-auto w-full pagesPadding py-16">
      <div className="px-5">
        <h4 className="h4 mb-4">Expertise</h4>
        <h2 className="h2 max-w-[700px] mb-4">
          Hire Permanent and Remote Developers
        </h2>
        <p className="p2 max-w-[500px] mb-4">
          From full-time remote engineering teams to hourly contractors, work
          with remote devs as needed
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-col-2 sm:grid-col-1 items-center justify-center">
        {renderCards}
      </div>
    </div>
  );
};

export default Team;
