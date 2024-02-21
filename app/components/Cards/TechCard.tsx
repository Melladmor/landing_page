import { CardsTech } from "../../data/data.d";
import Image from "next/image";
import React from "react";

type Props = CardsTech;

const TechCard = (props: Props) => {
  return (
    <div className="min-w-[300px] h-[90px] border-l-[20px] rounded-[8px] border-l-primary_yellow px-3 flex flex-nowrap gap-5 items-start">
      <Image
        width={1024}
        height={1024}
        alt={props.image}
        src={props.image}
        loading="lazy"
        className="h-[52px] w-[52px]"
      />
      <p className="p2 text-[16px] font-semibold">{props.title}</p>
    </div>
  );
};

export default TechCard;
